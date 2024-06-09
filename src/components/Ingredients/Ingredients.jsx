import { IngredientsList } from "./IngredientsList";
import styles from "./Ingredients.module.css";

export const Ingredients = () => {
  const dataIngredients = [
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Avocado",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
      mesure: "175 g",
    },
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Cucumber",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
      mesure: "175 g",
    },
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Cucumber",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
      mesure: "175 g",
    },
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Squid",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
      mesure: "175 g",
    },
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Squid",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
      mesure: "175 g",
    },
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Squid",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
      mesure: "175 g",
    },
  ];
  return (
    <div>
      <h3 className={styles.ingredients_subtitel}>Ingredients</h3>
      <IngredientsList ingredients={dataIngredients} />
    </div>
  );
};
