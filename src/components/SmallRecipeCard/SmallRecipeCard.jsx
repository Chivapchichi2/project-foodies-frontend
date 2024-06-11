import RecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./SmallRecipeCard.module.css";

const SmallRecipeCard = () => {
  return (
    <div className={styles.recipeCardWrapper}>
      <div className={styles.flexPhotoWrapper}>
        <RecipePhoto />
        <div className={styles.recipeTextWrapper}>
          <h5 className={styles.recipeName}> recipeName</h5>
          <p> some description</p>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <IconButton iconId="icon-arrow-up-right" styleSVG={styles.smallRecipeIcon} />
        <IconButton iconId="icon-trash" styleSVG={styles.smallRecipeIcon} />
      </div>
    </div>
  );
};

export default SmallRecipeCard;
