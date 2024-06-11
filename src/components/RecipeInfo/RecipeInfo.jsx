import { useEffect, useState } from "react";
import {
  useAddFavoriteRecipeMutation,
  useGetFavoriteRecipesQuery,
  useRemoveFavoriteRecipeMutation,
} from "../../store/services/recipeService.js";
import handleFavorite from "../../utilities/handleFavorite.js";
import Button from "../shared/Button/Button.jsx";
import style from "./RecipeInfo.module.css";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipeMainInfo } from "./RecipeMainInfo/RecipeMainInfo.jsx";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation.jsx";
import { useSelector } from "react-redux";
import { selectFavoriteRecipes } from "../../store/selectors/selectors.js";

export const RecipeInfo = ({ recipe }) => {
  const { thumb, title, instructions, ingredients, _id } = recipe;
  const favorites = useSelector(selectFavoriteRecipes);
  const [isFavorite, setIsFavorite] = useState(favorites.some(({ recipe }) => recipe._id === _id));

  const [addFavoriteRecipe, { isLoading: isAdding }] = useAddFavoriteRecipeMutation();
  const [removeFavoriteRecipe, { isLoading: isRemoving }] = useRemoveFavoriteRecipeMutation();

  return (
    <section className={style.recipe_info_container}>
      <img className={style.recipe_img} src={thumb} alt={title} />
      <div className={style.recipe_info_wrapper}>
        <RecipeMainInfo data={recipe} />
        <RecipeIngredients ingredients={ingredients} />
        <RecipePreparation instruction={instructions} />
        {!isFavorite ? (
          <Button
            text="add to favorite"
            variant="add_favorite"
            onClick={() => handleFavorite(addFavoriteRecipe, _id, "add", setIsFavorite)}
          />
        ) : (
          <Button
            text="delete from favorite"
            variant="add_favorite"
            onClick={() => handleFavorite(removeFavoriteRecipe, _id, "delete", setIsFavorite)}
          />
        )}
      </div>
    </section>
  );
};
