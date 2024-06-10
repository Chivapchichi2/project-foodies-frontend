import { useParams } from "react-router-dom";
import { RecipeInfo } from "../../components/RecipeInfo/RecipeInfo";
import { useGetRecipyByIdQuery } from "../../store/services/recipeService";
import { PopularRecipes } from "../../components/PopularRecipes/PopularRecipes";
import styles from "./Recipe.module.css";
import { useEffect } from "react";

const Recipe = () => {
  const { id } = useParams();
  const { data: recipe, isLoading } = useGetRecipyByIdQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className={styles.main_recipe_container}>
      {isLoading ? <p>Loading...</p> : <RecipeInfo recipe={recipe.data} />}
      {<PopularRecipes />}
    </main>
  );
};

export default Recipe;
