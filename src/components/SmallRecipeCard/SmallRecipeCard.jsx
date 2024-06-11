import SmallRecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./SmallRecipeCard.module.css";

const SmallRecipeCard = () => {
  const deleteRecipe = () => {
    console.log(`Delete recipe ${data._id} from favorites`);
  };
  const goToRecipeDetail = () => {
    console.log(`Go to recipe ${data._id} page`);
  };
  const data = {
    _id: "6462a8f74c3d0ddd28897fcd",
    title: "Battenberg Cake",
    category: "Dessert",
    owner: {
      _id: "64c8d958249fae54bae90bb9",
      name: "GoIT",
      avatar: null,
      email: "goit@gmail.com",
    },
    area: "British",
    instructions:
      "Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\r\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\r\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\r\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\r\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\r\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.",
    description:
      "A classic British cake made with almond sponge cake and covered with marzipan. It is traditionally pink and yellow checkered in appearance.",
    thumb: "https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg",
  };
  return (
    <div className={styles.recipeCardWrapper}>
      <div className={styles.flexPhotoWrapper}>
        <SmallRecipePhoto imgUrl={data.thumb} title={data.title} />
        <div className={styles.recipeTextWrapper}>
          <h5 className={styles.recipeTitle}> {data.title} </h5>
          <p className={styles.recipeInstructions}>{data.instructions}</p>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <IconButton iconId="icon-arrow-up-right" onClick={goToRecipeDetail} />
        <IconButton iconId="icon-trash" onClick={deleteRecipe} />
      </div>
    </div>
  );
};

export default SmallRecipeCard;
