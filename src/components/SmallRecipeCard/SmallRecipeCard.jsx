import { useSelector } from "react-redux";
import SmallRecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./SmallRecipeCard.module.css";
import { selectIsAuthorizedUser } from "../../store/selectors/profileSelectors.js";
import { NavLink } from "react-router-dom";
import handleFavorite from "../../utilities/handleFavorite.js";
import {
  useRemoveFavoriteRecipeMutation,
  useRemoveRecipeMutation,
} from "../../store/services/recipeService.js";

const SmallRecipeCard = ({ data, tab }) => {
  const isAuthorizedUser = useSelector(selectIsAuthorizedUser);
  const [removeFavoriteRecipe] = useRemoveFavoriteRecipeMutation();
  const [removeRecipe] = useRemoveRecipeMutation();

  const deleteRecipe = () => {
    if (tab === "recipe") {
      removeRecipe(data._id);
    } else {
      handleFavorite(removeFavoriteRecipe, data._id, "delete");
    }
  };

  return (
    <li className={styles.recipeCardWrapper}>
      <div className={styles.flexPhotoWrapper}>
        <SmallRecipePhoto imgUrl={data.thumb} title={data.title} />
        <div className={styles.recipeTextWrapper}>
          <h5 className={styles.recipeTitle}> {data.title} </h5>
          <p className={styles.recipeInstructions}>{data.instructions}</p>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink to={`/recipe/${data._id}`}>
          <IconButton
            iconId="icon-arrow-up-right"
            style={styles.iconBtn}
            styleSVG={styles.icon}
          ></IconButton>
        </NavLink>
        {isAuthorizedUser && (
          <IconButton
            iconId="icon-trash"
            onClick={deleteRecipe}
            style={styles.iconBtn}
            styleSVG={styles.icon}
          />
        )}
      </div>
    </li>
  );
};

export default SmallRecipeCard;
