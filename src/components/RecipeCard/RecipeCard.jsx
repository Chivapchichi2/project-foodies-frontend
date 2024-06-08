import styles from "./RecipeCard.module.css";
import cx from "classnames";

import image from "../../images/categories/categories-desserts.jpg";
import image2x from "../../images/categories/categories-desserts@2x.jpg";

import avatar from "../../images/categories/ivetta.jpg";
import avatar2x from "../../images/categories/ivetta@2x.jpg";

import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";
import IconButton from "../shared/IconButton/IconButton";

const RecipeCard = () => {
  return (
    <div className={cx(styles.recipeCard)}>
      <img
        src={image}
        srcSet={`${image} 1x, ${image2x} 2x`}
        alt="dessert"
        className={styles.recipeImage}
      />
      <div className={styles.textWrap}>
        <SectionSubtitle text="Chinin Apple tarts" />
        <p className={styles.recipeDescription}>
          To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon
          stick, allspice, split vanilla pod and seeds in a medium saucepan.
        </p>
      </div>
      <div className={styles.avatarBtnswrap}>
        <img
          src={avatar}
          srcSet={`${avatar} 1x, ${avatar2x} 2x`}
          alt="avatar"
          className={styles.avatar}
        />
        <ul className={styles.iconList}>
          <li>
            <IconButton iconId="icon-heart" />
          </li>
          <li>
            <IconButton iconId="icon-arrow-up-right" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
