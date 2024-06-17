import styles from "./RecipePhoto.module.css";

const SmallRecipePhoto = ({ imgUrl, title }) => {
  return (
    <div className={styles.recipeCard}>
      <img className={styles.recipeImg} src={imgUrl} alt={title} />
    </div>
  );
};

export default SmallRecipePhoto;
