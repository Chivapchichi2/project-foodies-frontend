import styles from "./IngredientSelector.module.css";
import SelectShared from "../../shared/SelectShared/SelectShared";
import { Input } from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import cx from "classnames";

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
        <Input type="text" name="quantity" register={register} placeholder="Enter quantity" />
        {errors.quantity && <p>{errors.quantity.message}</p>}
      </div>

      <Button
        text="Add ingridient"
        type="button"
        onClick={addIngredient}
        iconId="icon-plus"
        classname={cx(styles.button1)}
      />

      <ul className={cx(styles.list)}>
        {selectedIngredients.map((ingredient, index) => (
          <li key={index} className={cx(styles.listItem)}>
            <div className={styles.imageWrapper}>
              <img href="" alt="" width="55px" height="55px" className={cx(styles.image)} />
            </div>
            <div>
              <p>{ingredient.name}</p>
              <p>{ingredient.quantity}</p>
            </div>
            <Button text="remove" type="button" onClick={() => removeIngredient(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientSelector;
