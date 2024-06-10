import { NavLink } from "react-router-dom";
import styles from "./RecipeCard.module.css";
import cx from "classnames";
import { recipe } from "./recipe";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";
import IconButton from "../shared/IconButton/IconButton";
import Icon from "../shared/Icon/Icon";

import NO_AVATAR from "./no-profile-picture-icon.png";

const RecipeCard = () => {
  const { _id, title, owner, description, thumb } = recipe;

  const addToFavorites = () => {
    console.log(`Adding recipe ${_id} to favorites`);
  };
  return (
    <div className={cx(styles.recipeCard)}>
      <NavLink to={`/recipe/${_id}`}>
        <img src={thumb} alt={title} className={styles.recipeImage} />
      </NavLink>
      <div className={styles.textWrap}>
        <SectionSubtitle text={title} />
        <p className={styles.recipeDescription}>{description}</p>
      </div>
      <div className={styles.avatarBtnswrap}>
        <NavLink to={`/user/${owner._id}`} className={cx(styles.avatarWrapper)}>
          <img
            src={owner.avatar || `${NO_AVATAR}`}
            alt={`${owner.name} avatar`}
            className={styles.avatar}
          />
          <span>{owner.name}</span>
        </NavLink>
        <ul className={styles.iconList}>
          <li>
            <IconButton iconId="icon-heart" onClick={addToFavorites} />
          </li>
          <li>
            <NavLink to={`/recipe/${_id}`} className={styles.iconWrapper}>
              <Icon iconId="icon-arrow-up-right" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
