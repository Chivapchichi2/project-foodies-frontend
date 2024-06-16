import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yupSchema from "../../components/AddRecipeForm/helpers/yupSchema";
import { toast } from "react-toastify";
import styles from "./AddRecipe.module.css";

import ImageUploader from "../../components/AddRecipeForm/ImageUploader/ImageUploader";
import IngredientSelector from "../../components/AddRecipeForm/IngredientSelector/IngredientSelector";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Input } from "../../components/shared/Input/Input";
import Button from "../../components/shared/Button/Button";
import IconButton from "../../components/shared/IconButton/IconButton";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import FormTitleText from "../../components/AddRecipeForm/FormTiltle/FormTiltleText";
import { useGetCategoriesQuery } from "../../store/services/categoryService";
import { useGetIngredientsQuery } from "../../store/services/ingredientService";
import { useGetAreasQuery } from "../../store/services/areaService";
import { useCreateRecipeMutation } from "../../store/services/recipeService";
import { useFetchCurrentUserProfileQuery } from "../../store/services/profileService";
import { setUserAddedRecipes } from "../../store/features/profileSlice";
import { selectRecipes } from "../../store/selectors/profileSelectors";
import { useDispatch, useSelector } from "react-redux";
import useAutoResizeTextarea from "../../utilities/hooks/useAutoResizeTextarea";

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      selectedIngredients: [],
    },
  });
  const addRecipeToastId = "addRecipeToastId";
  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetCategoriesQuery();
  const { data: ingredientsData, isLoading: isIngredientsLoading } = useGetIngredientsQuery();
  const { data: areasData, isLoading: isAreasLoading } = useGetAreasQuery();
  const { data: userData } = useFetchCurrentUserProfileQuery();

  const [createRecipe] = useCreateRecipeMutation();

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [cookingTime, setCookingTime] = useState(1);
  const userRecepies = useSelector(selectRecipes);

  const dispatch = useDispatch();

  const categories = categoriesData;

  const ingredients = ingredientsData;

  const areas = areasData;

  const navigate = useNavigate(); //

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("thumb", data.thumb);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("area", data.area);
    formData.append("time", cookingTime.toString());
    formData.append("instructions", data.instructions);
    const ingredients = selectedIngredients.map((ingredient) => ({
      id: ingredient.id,
      measure: ingredient.measure,
    }));
    formData.append("ingredients", JSON.stringify(ingredients));

    try {
      const result = await createRecipe(formData);
      if (result.error) {
        toast.error(result.error.data.message, {
          toastId: addRecipeToastId,
        });
      } else {
        dispatch(setUserAddedRecipes([...userRecepies, result.data]));
        navigate(`/user/${userData.id}`);
        toast.success("Recipe added", {
          toastId: addRecipeToastId,
        });
        reset();
      }
    } catch (error) {
      toast.error(error.message, {
        toastId: addRecipeToastId,
      });
    }
  };
  //
  const handleReset = () => {
    reset();
    setImagePreview(null);
    setSelectedIngredients([]);
  };

  useAutoResizeTextarea(styles.textarea);

  return (
    <div className={styles.container}>
      <div className={styles.titleAndCrumpsWraper}>
        <div className={styles.breaCrumbs}>
          <BreadCrumbs currentPage="Add Recipe" />
        </div>

        <div className={styles.titleWrapper}>
          <SectionTitle text="add recipe" />
          <FormTitleText />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formWrapper}>
          <ImageUploader
            register={register}
            setValue={setValue}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            watch={watch}
            errors={errors}
          />

          <div>
            <div className={styles.nameInputWrapper}>
              <Input
                type="text"
                name="title"
                register={register}
                placeholder="The name of the recipe"
                classname={styles.nameInput}
              />
              {errors.title && <p className={styles.errorTitle}>{errors.title.message}</p>}
            </div>

            <div className={styles.recipeData}>
              <div className={styles.categoryAndTime}>
                <div className={styles.recipeData}>
                  <IngredientSelector
                    control={control}
                    register={register}
                    setValue={setValue}
                    watch={watch}
                    categories={categories}
                    areas={areas}
                    cookingTime={cookingTime}
                    setCookingTime={setCookingTime}
                    ingredients={ingredients}
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                    errors={errors}
                    isCategoriesLoading={isCategoriesLoading}
                    isIngredientsLoading={isIngredientsLoading}
                    isAreasLoading={isAreasLoading}
                  />
                  {errors.selectedIngredients && (
                    <p className={styles.errorMsg}>{errors.selectedIngredients.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.recipeIncstructions}>
              <label className={styles.labelPrep}>Recipe preparation</label>
              <div className={styles.textareaWrapper}>
                <textarea
                  {...register("instructions")}
                  name="instructions"
                  placeholder="Enter recipe"
                  maxLength="200"
                  className={styles.textarea}
                />
                <span className={styles.symbolCounter}>
                  {watch("instructions")?.length || 0}/200
                </span>
                {errors.instructions && (
                  <p className={styles.errorMsg}>{errors.instructions.message}</p>
                )}
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <IconButton
                iconId="icon-trash"
                type="button"
                onClick={handleReset}
                width="20"
                height="20"
                style={styles.trashBtn}
                styleSVG={styles.iconTrash}
              />

              <Button text="Publish" type="submit" classname={styles.button} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
