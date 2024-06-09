import RecipePhoto from "../RecipePhoto/RecipePhoto";
import styles from "./FollowerCard.module.css";

const FollowerRecipes = () => {
  return (
    <div className={styles.recipesWrapper}>
      <RecipePhoto>1</RecipePhoto>
      <RecipePhoto>2</RecipePhoto>
      <RecipePhoto>3</RecipePhoto>
    </div>
  );
};

export default FollowerRecipes;
