import Button from "../shared/Button/Button.jsx";
import style from "./RecipeInfo.module.css";
import { RecipeIngredients } from "./RecipeIngredients/RecipeIngredients";
import { RecipeMainInfo } from "./RecipeMainInfo/RecipeMainInfo.jsx";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation.jsx";

export const RecipeInfo = () => {
  const data = {
    _id: {
      $oid: "6462a8f74c3d0ddd288980be",
    },
    title: "Salmon Avocado Salad",
    category: "Seafood",
    owner: {
      _id: {
        $oid: "64c8d958249fae54bae90bb9",
      },
      name: "GoIT",
      avatar: null,
      email: "goit@gmail.com",
      followers: [],
      following: [],
    },
    area: "British",
    instructions:
      "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
    description:
      "A healthy and refreshing salad with pan-seared salmon, ripe avocado, cherry tomatoes, and a zesty lemon vinaigrette. Great for a light lunch or dinner.",
    thumb: "https://ftp.goit.study/img/so-yummy/preview/Salmon%20Avocado%20Salad.jpg",
    time: "8",
    ingredients: [
      {
        id: "640c2dd963a319ea671e365c",
        measure: "400g",
      },
      {
        id: "640c2dd963a319ea671e365f",
        measure: "3",
      },
      {
        id: "640c2dd963a319ea671e36b7",
        measure: "1",
      },
      {
        id: "640c2dd963a319ea671e376f",
        measure: "400g",
      },
      {
        id: "640c2dd963a319ea671e3722",
        measure: "4 tbs",
      },
      {
        id: "640c2dd963a319ea671e3716",
        measure: "zest and juice of 1",
      },
      {
        id: "640c2dd963a319ea671e36fd",
        measure: "2 tsp",
      },
      {
        id: "640c2dd963a319ea671e372c",
        measure: "3 tbs",
      },
    ],
  };

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
    <div className={style.recipe_info_container}>
      <img className={style.recipe_img} src={data.thumb} alt={data.title} />
      <div className={style.recipe_info_wrapper}>
        <RecipeMainInfo data={data} />
        <RecipeIngredients ingredients={dataIngredients} />
        <RecipePreparation instruction={data.instructions} />
        <Button text="add to favorite" variant="add_favorite" />
      </div>
    </div>
  );
};
