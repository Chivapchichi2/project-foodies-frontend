import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./FollowerCard.module.css";
import SmallRecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto.jsx";
import { useResponsiveValue } from "../../utilities/index.js";
import { NavLink } from "react-router-dom";

const FollowerCard = ({ data, btnText, handleFollowUser, handleUnfollowUser }) => {
  const recipeCardsVisability = useResponsiveValue(768, false, 3);
  const recipeCardsQuantity = useResponsiveValue(1440, 3, 4);

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.followerData}>
        <div className={styles.photoWrapper}>
          <img
            src={
              data.avatarURL ||
              "https://gravatar.com/avatar/000000000000000000000000000000000000000000000000000000?d=mp"
            }
            className={styles.smallProfilePhoto}
            alt="User avatar"
          />
        </div>
        <div>
          <h5 className={styles.name}> {data.name}</h5>
          <p className={styles.descr}>Own recipes: {data.totalRecipes}</p>
          <Button text={btnText} variant="follow_user" />
        </div>
      </div>
      {recipeCardsVisability && (
        <ul className={styles.recipesList}>
          {data?.recipes?.map((recipe, idx) => {
            if (idx < recipeCardsQuantity) {
              return (
                <li key={recipe._id}>
                  <SmallRecipePhoto imgUrl={recipe.thumb} title={recipe.title} />
                </li>
              );
            }
          })}
        </ul>
      )}
      <NavLink to={`/user/${data._id}`}>
        <IconButton
          iconId="icon-arrow-up-right"
          style={styles.iconBtn}
          styleSVG={styles.icon}
        ></IconButton>
      </NavLink>
    </li>
  );
};

export default FollowerCard;
