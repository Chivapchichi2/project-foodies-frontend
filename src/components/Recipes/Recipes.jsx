import styles from "./Recipes.module.css";
import { Icon } from "../shared";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { RecipeCardList } from "./RecipeCardList";
import { useGetRecipesQuery } from "../../store/services/recipeService";
import SelectShared from "../shared/SelectShared/SelectShared";
import { useGetAreasQuery } from "../../store/services/areaService";
import { useGetIngredientsQuery } from "../../store/services/ingredientService";
import { useState } from "react";
import Pagination from "../Pagination";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle.jsx";
import { Loader } from "../shared/Loader/Loader.jsx";

export const Recipes = () => {
  const { id: category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const ingredientQuery = searchParams.get("ingredient") || "";
  const areaQuery = searchParams.get("area") || "";

  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: ingredientsData,
    isLoading: isIngredientsLoading,
    error: ingredientsError,
  } = useGetIngredientsQuery();
  const { data: areaData, isLoading: isAreaLoading, error: areaError } = useGetAreasQuery();
  const {
    data: recipes,
    isLoading,
    error: recipesError,
  } = useGetRecipesQuery({
    category,
    ingredient: ingredientQuery,
    area: areaQuery,
    page: currentPage,
    limit: 12,
  });
  const isError = ingredientsError || areaError || recipesError;

  const handleSelectChange = (paramName, selectedOption) => {
    const newParams = new URLSearchParams(searchParams);
    if (selectedOption && selectedOption.value !== null) {
      newParams.set(paramName, selectedOption.label);
    } else {
      newParams.delete(paramName);
    }
    setSearchParams(newParams);
  };

  const getInputValue = (collections, query) => {
    const data = collections.find((option) => option.name === query);

    return data
      ? {
          value: data?._id || null,
          label: data?.name || null,
        }
      : null;
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <section className={styles.category_section}>
      {isError && <Navigate to="/error500" replace={true} />}
      {!isError && (
        <>
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
                  options={[{ _id: null, name: "Clear" }, ...ingredientsData]}
                  placeholder="Ingredients"
                  value={getInputValue(ingredientsData, ingredientQuery)}
                  onChange={(selectedOption) => handleSelectChange("ingredient", selectedOption)}
                />
              )}
              {!isAreaLoading && (
                <SelectShared
                  options={[{ _id: null, name: "Clear" }, ...areaData]}
                  placeholder="Area"
                  value={getInputValue(areaData, areaQuery)}
                  onChange={(selectedOption) => handleSelectChange("area", selectedOption)}
                />
              )}
            </div>
            <div className={styles.recipes_list_wrapp}>
              {isLoading && <Loader />}
              {!!recipes?.data.length && <RecipeCardList recipes={recipes} />}
              {!recipes?.data.length && !isLoading && (
                <SectionSubtitle
                  text={"No recipes were found with the selected parameters."}
                  customStyle={styles.no_recipes}
                />
              )}
              {recipes?.totalPages > 1 && (
                <Pagination
                  pageCount={recipes.totalPages}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                />
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
