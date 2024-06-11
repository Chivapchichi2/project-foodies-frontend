import Button from "../shared/Button/Button.jsx";
import style from "./RecipeInfo.module.css";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipeMainInfo } from "./RecipeMainInfo/RecipeMainInfo.jsx";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation.jsx";

export const RecipeInfo = ({ recipe }) => {
  const { thumb, title, instructions, ingredients } = recipe;

  const onSubmit = () => {
    // Додати логіку додавання і видалення фейворіт
  };

  return (
    <section className={style.recipe_info_container}>
      <img className={style.recipe_img} src={thumb} alt={title} />
      <div className={style.recipe_info_wrapper}>
        <RecipeMainInfo data={recipe} />
        <RecipeIngredients ingredients={ingredients} />
        <RecipePreparation instruction={instructions} />
        <Button text="add to favorite" variant="add_favorite" />
      </div>
    </section>
  );
};
