import { useEffect, useState } from "react";
import {
  useAddFavoriteRecipeMutation,
  useRemoveFavoriteRecipeMutation,
} from "../../store/services/recipeService.js";
import handleFavorite from "../../utilities/handleFavorite.js";
import Button from "../shared/Button/Button.jsx";
import style from "./RecipeInfo.module.css";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipeMainInfo } from "./RecipeMainInfo/RecipeMainInfo.jsx";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation.jsx";
import recipe_without_img from "../../images/recipe_without_img.jpg";
import { useSelector } from "react-redux";
import { selectFavoriteRecipes } from "../../store/selectors/selectors.js";
import { selectToken } from "../../store/features/authSlice.js";

export const RecipeInfo = ({ recipe }) => {
  const { thumb, title, instructions, ingredients, _id } = recipe;
  const favoritesRecipe = useSelector(selectFavoriteRecipes);
  const [isFavorite, setIsFavorite] = useState(favoritesRecipe.includes(_id));
  const token = useSelector(selectToken);
  console.log(token);

  useEffect(() => {
    setIsFavorite(favoritesRecipe.includes(_id));
  }, [favoritesRecipe, _id]);

  const [addFavoriteRecipe] = useAddFavoriteRecipeMutation();
  const [removeFavoriteRecipe] = useRemoveFavoriteRecipeMutation();

  return (
    <section className={style.recipe_info_container}>
      <img className={style.recipe_img} src={thumb ? thumb : recipe_without_img} alt={title} />
      <div className={style.recipe_info_wrapper}>
        <RecipeMainInfo data={recipe} />
        <RecipeIngredients ingredients={ingredients} />
        <RecipePreparation instruction={instructions} />
        {token ? (
          !isFavorite ? (
            <Button
              text="Add to favorites"
              variant="add_favorite"
              onClick={() => handleFavorite(addFavoriteRecipe, _id, "add", setIsFavorite)}
            />
          ) : (
            <Button
              text="Remove from favorites"
              variant="add_favorite"
              onClick={() => handleFavorite(removeFavoriteRecipe, _id, "delete", setIsFavorite)}
            />
          )
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
