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
        <Input type="number" name="quantity" register={register} placeholder="Enter quantity" />
        {errors.quantity && <p>{errors.quantity.message}</p>}
      </div>

      <Button
        text="Add ingridient"
        type="button"
        onClick={addIngredient}
        iconId="icon-plus"
        className={cx(styles.button)}
      />

      <div>
        {selectedIngredients.map((ingredient, index) => (
          <div key={index}>
            <p>
              {ingredient.name}: {ingredient.quantity}
            </p>
            <Button text="remove" type="button" onClick={() => removeIngredient(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientSelector;
