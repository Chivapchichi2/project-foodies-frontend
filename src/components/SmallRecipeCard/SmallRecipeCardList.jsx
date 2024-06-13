import SmallRecipeCard from "./SmallRecipeCard";
import styles from "./SmallRecipeCard.module.css";

const SmallRecipeCardList = ({ data }) => {
  return (
    <ul className={styles.recipeCardList}>
      {data.map((el) => (
        <SmallRecipeCard key={el.id} data={el} />
      ))}
    </ul>
  );
};

export default SmallRecipeCardList;
