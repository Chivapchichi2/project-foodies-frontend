import styles from "./Ingredients.module.css";

export const IngredientsItem = ({ pathImg, name, mesure }) => {
  return (
    <li className={styles.ingredients_item}>
      <img className={styles.ingredients_img} src={pathImg} alt={`${name} image`} />
      <div className={styles.ingredients_info}>
        <p>{name}</p>
        <p className={styles.ingredients_mesure}>{mesure}</p>
      </div>
    </li>
  );
};
