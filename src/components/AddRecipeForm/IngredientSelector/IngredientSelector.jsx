import { useState } from "react";
import styles from "./IngredientSelector.module.css";
import SelectShared from "../../shared/SelectShared/SelectShared";
import { Input } from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import IconButton from "../../shared/IconButton/IconButton";
import CookingTimeCounter from "../CookingTimeCounter/CookingTimeCounter";

const IngredientSelector = ({
  register,
  setValue,
  watch,
  ingredients,
  selectedIngredients,
  setSelectedIngredients,
  errors,
  categories,
  cookingTime,
  setCookingTime,
  isIngredientsLoading,
  isCategoriesLoading,
}) => {
  const [isIngredientListVisible, setIsIngredientListVisible] = useState(false);

  const addIngredient = () => {
    const ingredient = watch("ingredient");
    const quantity = watch("quantity");
    if (ingredient && quantity) {
      const selectedIngredient = ingredients.find((item) => item._id === ingredient.value);

      setSelectedIngredients([
        ...selectedIngredients,
        { name: ingredient.label, quantity, imageUrl: selectedIngredient.img },
      ]);
      setValue("ingredient", null);
      setValue("quantity", "");
      setIsIngredientListVisible(true);
    }
  };

  const removeIngredient = (index) => {
    setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
    if (selectedIngredients.length <= 1) {
      setIsIngredientListVisible(false);
    }
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.categoryAndTime}>
        {isCategoriesLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <label>Category</label>
            <SelectShared
              options={categories}
              placeholder="Select a category"
              {...register("category")}
              onChange={(selectedOption) => setValue("category", selectedOption.value)}
            />
            {errors.category && <p>{errors.category.message}</p>}
          </div>
        )}
      </div>
      <div>
        <CookingTimeCounter cookingTime={cookingTime} setCookingTime={setCookingTime} />
        {errors.cookingTime && <p>{errors.cookingTime.message}</p>}
      </div>
      <div className={styles.ingredientAndQuantity}>
        {isIngredientsLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <label>Ingredient</label>
            <SelectShared
              options={ingredients}
              placeholder="Select an ingredient"
              className={styles.select}
              {...register("ingredient")}
              onChange={(selectedOption) => setValue("ingredient", selectedOption)}
            />
            {errors.ingredient && <p>{errors.ingredient.message}</p>}
          </div>
        )}

        <div>
          <Input
            type="text"
            name="quantity"
            register={register}
            placeholder="Enter quantity"
            classname={styles.inputQuantity}
          />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
      </div>
      {isIngredientListVisible && (
        <ul className={styles.list}>
          {selectedIngredients.map((ingredient, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.imageWrapper}>
                <img
                  src={ingredient.imageUrl}
                  alt={ingredient.name}
                  width="55px"
                  height="55px"
                  className={styles.image}
                />
              </div>
              <div className={styles.textWrapper}>
                <p>{ingredient.name}</p>
                <p>{ingredient.quantity}</p>
              </div>
              <IconButton
                iconId="icon-close-btn"
                type="button"
                onClick={() => removeIngredient(index)}
                style={styles.iconBtn}
              />
            </li>
          ))}
        </ul>
      )}
      <Button
        text="Add ingredient +"
        type="button"
        onClick={addIngredient}
        iconId="icon-plus"
        classname={styles.buttonAdd}
      />
    </div>
  );
};

export default IngredientSelector;
