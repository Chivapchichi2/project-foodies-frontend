import styles from "./RecipePreparation.module.css";

export const RecipePreparation = ({ instruction }) => {
  return (
    <div>
      <h4 className={styles.recipe_preparation}>Recipe Preparation</h4>
      <p className={styles.instruction}>{instruction}</p>
    </div>
  );
};
