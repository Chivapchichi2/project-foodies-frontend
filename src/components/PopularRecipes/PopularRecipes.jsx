import { useGetPopularRecipeQuery } from "../../store/services/recipeService";
import { PopularRecipesList } from "./PopularRecipesList";
import styles from "./PopularRecipes.module.css";

export const PopularRecipes = () => {
  const { data: popularRecipes, isLoading } = useGetPopularRecipeQuery();

  return (
    <section className={styles.popular_recipes_container}>
      <h3 className={styles.header_popular_recipes}>Popular recipes</h3>
      {isLoading ? <p>Loading...</p> : <PopularRecipesList recipes={popularRecipes} />}
    </section>
  );
};
