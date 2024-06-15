import { useGetPopularRecipeQuery } from "../../store/services/recipeService";
import { PopularRecipesList } from "./PopularRecipesList";
import styles from "./PopularRecipes.module.css";
import { Loader } from "../shared/Loader/Loader";

export const PopularRecipes = () => {
  const { data: popularRecipes, isLoading } = useGetPopularRecipeQuery();

  return (
    <section className={styles.popular_recipes_container}>
      <h3 className={styles.header_popular_recipes}>Popular recipes</h3>
      {isLoading ? <Loader /> : <PopularRecipesList recipes={popularRecipes} />}
    </section>
  );
};
