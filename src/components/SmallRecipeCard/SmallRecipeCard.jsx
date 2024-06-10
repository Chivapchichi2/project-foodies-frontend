import RecipePhoto from "../RecipePhoto/RecipePhoto";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./SmallRecipeCard.module.css";

const SmallRecipeCard = () => {
  return (
    <div className={styles.recipeCardWrapper}>
      <RecipePhoto />
      <div>
        <h5 className={styles.recipeName}> recipeName</h5>
        <p> some description</p>
      </div>
      <div>
        <IconButton icon-id="icon-arrow-up-right" />
        <IconButton icon-id="con-trash" />
      </div>
    </div>
  );
};

export default SmallRecipeCard;
