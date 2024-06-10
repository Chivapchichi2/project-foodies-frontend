import styles from "./IngredientSelector.module.css";
import SelectShared from "../../shared/SelectShared/SelectShared";
import { Input } from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";

import IconButton from "../../shared/IconButton/IconButton";

const IngredientSelector = ({
  register,
  setValue,
  watch,
  ingredients,
  selectedIngredients,
  setSelectedIngredients,
  errors,
}) => {
  const addIngredient = () => {
    const ingredient = watch("ingredient");
    const quantity = watch("quantity");
    if (ingredient && quantity) {
      setSelectedIngredients([...selectedIngredients, { name: ingredient.label, quantity }]);
      setValue("ingredient", null);
      setValue("quantity", "");
    }
  };

  const removeIngredient = (index) => {
    setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
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

      <Button
        text="Add ingridient +"
        type="button"
        onClick={addIngredient}
        iconId="icon-plus"
        classname={styles.button1}
      />

      <ul className={styles.list}>
        {selectedIngredients.map((ingredient, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.imageWrapper}>
              <img href="" alt="" width="55px" height="55px" className={styles.image} />
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
    </div>
  );
};

export default IngredientSelector;
