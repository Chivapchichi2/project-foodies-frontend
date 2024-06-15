import styles from "./Recipes.module.css";
import { Icon } from "../shared";
import { Link } from "react-router-dom";
import { RecipeCardList } from "./RecipeCardList";
import { useGetRecipesQuery } from "../../store/services/recipeService";
import SelectShared from "../shared/SelectShared/SelectShared";
import { useGetAreasQuery } from "../../store/services/areaService";
import { useGetIngredientsQuery } from "../../store/services/ingredientService";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

export const Recipes = ({ category }) => {
  const { data: ingredientsData, isLoading: isIngredientsLoading } = useGetIngredientsQuery();
  const { data: areaData, isLoading: isAreaLoading } = useGetAreasQuery();
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: recipes, refetch } = useGetRecipesQuery({
    category,
    ingredient: selectedIngredient,
    area: selectedArea,
    page: currentPage,
  });

  useEffect(() => {
    refetch();
  }, [selectedIngredient, selectedArea, refetch]);

  const handleSelectChange = (funcOption, selectedOption) => {
    funcOption(selectedOption);
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <section className={styles.category_section}>
      <div className={styles.category_info_wrapp}>
        <Link to="/" className={styles.button_back}>
          <Icon iconId={"icon-arrow-back"} />
          <span>Back</span>
        </Link>
        <h2 className={styles.category_title}>{category}</h2>
        <p className={styles.category_description}>
          Go on a taste journey, where every sip is a sophisticated creative chord, and every
          dessert is an expression of the most refined gastronomic desires.
        </p>
      </div>
      <div className={styles.category_recipes_selectors_wrapp}>
        <div className={styles.category_selects}>
          {!isIngredientsLoading && (
            <SelectShared
              options={ingredientsData}
              placeholder="Ingredients"
              onChange={(selectedOption) =>
                handleSelectChange(setSelectedIngredient, selectedOption)
              }
            />
          )}
          {!isAreaLoading && (
            <SelectShared
              options={areaData}
              placeholder="Area"
              onChange={(selectedOption) => handleSelectChange(setSelectedArea, selectedOption)}
            />
          )}
        </div>
        <div className={styles.recipes_list_wrapp}>
          {recipes && <RecipeCardList recipes={recipes} />}
          {recipes?.totalPages > 1 && (
            <Pagination
              pageCount={recipes.totalPages}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </section>
  );
};
