import { useState } from "react";
import cx from "classnames";
import { AddMoreButton } from "src/components/Recipe/RecipeNavigation/AddMoreButton/AddMoreButton";
import { NavigationButton } from "src/components/Recipe/RecipeNavigation/NavigationButton/NavigationButton";
import beef from "src/assets/categories/categories-beef.jpg";
import breakfast from "src/assets/categories/categories-breakfast.jpg";
import desserts from "src/assets/categories/categories-desserts.jpg";
import goat from "src/assets/categories/categories-goat.jpg";
import lamb from "src/assets/categories/categories-lamb.jpg";
import miscellaneous from "src/assets/categories/categories-miscellaneous.jpg";
import pasta from "src/assets/categories/categories-pasta.jpg";
import pork from "src/assets/categories/categories-pork.jpg";
import seafood from "src/assets/categories/categories-seafood.jpg";
import side from "src/assets/categories/categories-side.jpg";
import starter from "src/assets/categories/categories-starter.jpg";
import vegan from "src/assets/categories/categories-vegan.jpg";
import vegetarian from "src/assets/categories/categories-vegetarian.jpg";

import styles from "./styles.module.css";

const CATEGORIES = [
  {
    category: "Beef",
    url: "/recipe/beef",
    imgUrl: beef,
  },
  {
    category: "Breakfast",
    url: "/recipe/breakfast",
    imgUrl: breakfast,
  },
  {
    category: "Desserts",
    url: "/recipe/desserts",
    imgUrl: desserts,
  },
  {
    category: "Lamb",
    url: "/recipe/lamb",
    imgUrl: lamb,
  },
  {
    category: "Goat",
    url: "/recipe/goat",
    imgUrl: goat,
  },
  {
    category: "Miscellaneous",
    url: "/recipe/miscellaneous",
    imgUrl: miscellaneous,
  },
  {
    category: "Pasta",
    url: "/recipe/pasta",
    imgUrl: pasta,
  },
  {
    category: "Pork",
    url: "/recipe/pork",
    imgUrl: pork,
  },
  {
    category: "Seafood",
    url: "/recipe/seafood",
    imgUrl: seafood,
  },
  {
    category: "Side",
    url: "/recipe/side",
    imgUrl: side,
  },
  {
    category: "Starter",
    url: "/recipe/starter",
    imgUrl: starter,
  },
  {
    category: "Vegan",
    url: "/recipe/vegan",
    imgUrl: vegan,
  },
  {
    category: "Vegetarian",
    url: "/recipe/vegetarian",
    imgUrl: vegetarian,
  },
];

const NUMBER_NAV_ELEMENTS = 11;

export const RecipeNavigation = () => {
  const [numberNavElements, setNumberNavElements] = useState(NUMBER_NAV_ELEMENTS);

  const renderNavigationList = CATEGORIES.slice(0, numberNavElements);

  const handlerAddMoreBtn = () => {
    setNumberNavElements((prev) => prev + NUMBER_NAV_ELEMENTS);
  };
  return (
    <nav>
      <ul className={cx(styles["navigation"])}>
        {renderNavigationList.map((category) => (
          <li key={category.url}>
            <NavigationButton
              category={category.category}
              url={category.url}
              imgUrl={category.imgUrl}
            />
          </li>
        ))}
        {numberNavElements < CATEGORIES.length && (
          <li>
            <AddMoreButton onClick={handlerAddMoreBtn} />
          </li>
        )}
      </ul>
    </nav>
  );
};
