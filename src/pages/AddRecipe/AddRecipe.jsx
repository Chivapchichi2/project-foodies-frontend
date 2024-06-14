import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yupSchema from "../../components/AddRecipeForm/helpers/yupSchema";

import styles from "./AddRecipe.module.css";

import ImageUploader from "../../components/AddRecipeForm/ImageUploader/ImageUploader";
import IngredientSelector from "../../components/AddRecipeForm/IngredientSelector/IngredientSelector";

import { Input } from "../../components/shared/Input/Input";
import Button from "../../components/shared/Button/Button";
import IconButton from "../../components/shared/IconButton/IconButton";
import Title from "../../components/shared/Title/Title";
import FormTitleText from "../../components/AddRecipeForm/FormTiltle/FormTiltleText";
import { useGetCategoriesQuery } from "../../store/services/categoryService";
import { useGetIngredientsQuery } from "../../store/services/ingredientService";
import { useCreateRecipeMutation } from "../../store/services/recipeService";

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
  });

  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetCategoriesQuery();

  const { data: ingredientsData, isLoading: isIngredientsLoading } = useGetIngredientsQuery();

  const [createRecipe, { isSuccess }] = useCreateRecipeMutation();

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [cookingTime, setCookingTime] = useState(1);

  const categories = categoriesData;

  const ingredients = ingredientsData;
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate(`/user/`);
    }
  }, [isSuccess, navigate]);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("cookingTime", cookingTime);
    formData.append("instructions", data.instructions);
    selectedIngredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][quantity]`, ingredient.quantity);
    });

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      createRecipe(formData);
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  const handleReset = () => {
    reset();
    setImagePreview(null);
    setSelectedIngredients([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <Title text="add recipe" />
        <FormTitleText />
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
            <div>
              <Input
                type="text"
                name="title"
                register={register}
                placeholder="The name of the recipe"
                classname={styles.nameInput}
              />
              {errors.title && <p>{errors.title.message}</p>}
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
                    cookingTime={cookingTime}
                    setCookingTime={setCookingTime}
                    ingredients={ingredients}
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                    errors={errors}
                    isCategoriesLoading={isCategoriesLoading}
                    isIngredientsLoading={isIngredientsLoading}
                  />
                </div>
              </div>
            </div>
            <div className={styles.recipeIncstructions}>
              <label className={styles.labelPrep}>Recipe preparation</label>
              <div className={styles.textareaWrapper}>
                <textarea
                  {...register("instructions")}
                  placeholder="Enter recipe"
                  maxLength="200"
                  className={styles.textarea}
                />
                <span className={styles.symbolCounter}>
                  {watch("instructions")?.length || 0}/200
                </span>
                {errors.instructions && <p>{errors.instructions.message}</p>}
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
