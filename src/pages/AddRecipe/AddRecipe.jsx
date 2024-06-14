import { useState } from "react";
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
import { BASE_URL } from "../../utilities/const";

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

  const [createRecipe] = useCreateRecipeMutation();

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [cookingTime, setCookingTime] = useState(1);

  const categories = categoriesData;

  const ingredients = ingredientsData;

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

    createRecipe(formData)
      .then(() => {
        // Redirect to user page on success
        window.location.href = `${BASE_URL}api/users/current`;
      })
      .catch((error) => {
        alert("Error: " + error.response.data.message);
      });
  };

  const handleReset = () => {
    reset();
    setImagePreview(null);
    setSelectedIngredients([]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.titleWrapper}>
          <Title text="add recipe" />
          <FormTitleText />
        </div>
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

            <div className={styles.textareaWrapper}>
              <textarea
                {...register("description")}
                maxLength="200"
                placeholder="Enter the description of the dish"
                className={styles.textarea}
              />
              <span className={styles.symbolCounter}>{watch("description")?.length || 0}/200</span>
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            {/* {Category} */}
            <div className={styles.recipeData}>
              <div className={styles.categoryAndTime}>
                <div>
                  <label>Category</label>
                  {isCategoriesLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <SelectShared
                      options={categories}
                      placeholder="Select a category"
                      {...register("category")}
                      onChange={(selectedOption) => setValue("category", selectedOption.value)}
                    />
                  )}
                  {errors.category && <p>{errors.category.message}</p>}
                </div>

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
                />
              </div>
              {isIngredientsLoading ? (
                <p>Loading...</p>
              ) : (
                <IngredientSelector
                  control={control}
                  register={register}
                  setValue={setValue}
                  watch={watch}
                  ingredients={ingredients}
                  selectedIngredients={selectedIngredients}
                  setSelectedIngredients={setSelectedIngredients}
                  errors={errors}
                />
              )}

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
