import css from "./IngredientSelector.module.css";
import SelectShared from "../../shared/SelectShared/SelectShared";
import { Input } from "../../shared/Input/Input";

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
    <div className={css.container}>
      <div>
        <label>Ingredient</label>
        <SelectShared
          options={ingredients}
          placeholder="Select an ingredient"
          className={css.select}
          {...register("ingredient")}
          onChange={(selectedOption) => setValue("ingredient", selectedOption)}
        />
        {errors.ingredient && <p>{errors.ingredient.message}</p>}
      </div>

      <div>
        <Input type="number" name="quantity" register={register} placeholder="Enter quantity" />
        {errors.quantity && <p>{errors.quantity.message}</p>}
      </div>

      <button type="button" onClick={addIngredient}>
        Add ingredient+
      </button>

      <div>
        {selectedIngredients.map((ingredient, index) => (
          <div key={index}>
            <p>
              {ingredient.name}: {ingredient.quantity}
            </p>
            <button type="button" onClick={() => removeIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientSelector;
