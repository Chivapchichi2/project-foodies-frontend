import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./FollowerCard.module.css";
import RecipePhoto from "../RecipePhoto/RecipePhoto.jsx";

const FollowerCard = () => {
  const clickHandler = () => console.log("CLICKED");

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.followerData}>
        <div className={styles.photoWrapper}>Photo</div>
        <div>
          <h5 className={styles.name}> Name</h5>
          <p className={styles.descr}>Own recipes: 100</p>
          <Button text="Follow" variant="follow_user" />
        </div>
      </div>
      <div className={styles.recipesWrapper}>
        <RecipePhoto>1</RecipePhoto>
        <RecipePhoto>2</RecipePhoto>
        <RecipePhoto>3</RecipePhoto>
      </div>
      <IconButton onClick={clickHandler} icon-id="icon-arrow-up-right"></IconButton>
    </div>
  );
};

export default FollowerCard;
