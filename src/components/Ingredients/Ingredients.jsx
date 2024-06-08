import { IngredientsList } from "./IngredientsList";
import styles from "./Ingredients.module.css";

export const Ingredients = () => {
  const dataIngredients = [];
  return (
    <div>
      <h3 className={styles.ingredients_subtitel}>Ingredients</h3>
      <IngredientsList />
    </div>
  );
};
