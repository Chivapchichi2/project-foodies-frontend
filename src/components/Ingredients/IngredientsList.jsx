import { IngredientsItem } from "./IngredientsItem";
import styles from "./Ingredients.module.css";
import { nanoid } from "@reduxjs/toolkit";

export const IngredientsList = ({ ingredients }) => {
  return (
    <ul className={styles.ingredients_list}>
      {ingredients.map(({ name, img, mesure }) => (
        <IngredientsItem key={nanoid()} pathImg={img} name={name} mesure={mesure} />
      ))}
    </ul>
  );
};
