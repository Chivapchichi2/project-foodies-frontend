import { useSelector } from "react-redux";
import SmallRecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./SmallRecipeCard.module.css";
import { selectIsAuthorizedUser } from "../../store/features/profileSlice";
import { NavLink } from "react-router-dom";

const SmallRecipeCard = ({ data }) => {
  const isAuthorizedUser = useSelector(selectIsAuthorizedUser);
  const deleteRecipe = () => {
    console.log(`Delete recipe ${data._id} from favorites`);
  };

  return (
    <li className={styles.recipeCardWrapper} key={data._id}>
      <div className={styles.flexPhotoWrapper}>
        <SmallRecipePhoto imgUrl={data.thumb} title={data.title} />
        <div className={styles.recipeTextWrapper}>
          <h5 className={styles.recipeTitle}> {data.title} </h5>
          <p className={styles.recipeInstructions}>{data.instructions}</p>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink to={`/recipe/${data._id}`}>
          <IconButton iconId="icon-arrow-up-right" />
        </NavLink>
        {isAuthorizedUser && <IconButton iconId="icon-trash" onClick={deleteRecipe} />}
      </div>
    </li>
  );
};

export default SmallRecipeCard;
