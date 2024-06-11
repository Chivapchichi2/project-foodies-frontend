import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./FollowerCard.module.css";
import RecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto.jsx";

const FollowerCard = () => {
  const clickHandler = () => console.log("CLICKED");

  const data = {
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    name: "Test Name",
    followers: 10,
    createdRecipesCount: {
      total: 4,
      data: [
        {
          _id: "66661e67b82345fadcb51e95",
          title: "Beef Brisket Pot Roast",
          area: "American",
          instructions: "Prepare the brisket for cooking...",
          description: "A comforting American dish...",
          thumb:
            "http://res.cloudinary.com/dgbwicpza/image/upload/v1717968488/recipes/vjj6yx8zbuczn5xinin0.jpg",
        },
        {
          _id: "66661e67b82345fadcb51e96",
          title: "Beef Brisket Pot Roast",
          area: "American",
          instructions: "Prepare the brisket for cooking...",
          description: "A comforting American dish...",
          thumb:
            "http://res.cloudinary.com/dgbwicpza/image/upload/v1717968488/recipes/vjj6yx8zbuczn5xinin0.jpg",
        },
        {
          _id: "66661e67b82345fadcb51e97",
          title: "Beef Brisket Pot Roast",
          area: "American",
          instructions: "Prepare the brisket for cooking...",
          description: "A comforting American dish...",
          thumb:
            "http://res.cloudinary.com/dgbwicpza/image/upload/v1717968488/recipes/vjj6yx8zbuczn5xinin0.jpg",
        },
        {
          _id: "66661e67b82345fadcb51e98",
          title: "Beef Brisket Pot Roast",
          area: "American",
          instructions: "Prepare the brisket for cooking...",
          description: "A comforting American dish...",
          thumb:
            "http://res.cloudinary.com/dgbwicpza/image/upload/v1717968488/recipes/vjj6yx8zbuczn5xinin0.jpg",
        },
      ],
    },
    favoriteRecipesCount: {
      total: 0,
      data: [],
    },
    followersCount: 0,
    followingCount: 0,
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.followerData}>
        <div className={styles.photoWrapper}>
          <img src={data.avatar} className={styles.smallProfilePhoto} alt="User avatar" />
        </div>
        <div>
          <h5 className={styles.name}> {data.name}</h5>
          <p className={styles.descr}>Own recipes: {data.followers}</p>
          <Button text="Follow" variant="follow_user" />
        </div>
      </div>
      <div className={styles.recipesWrapper}>
        <RecipePhoto>1</RecipePhoto>
        <RecipePhoto>2</RecipePhoto>
        <RecipePhoto>3</RecipePhoto>
      </div>
      <IconButton onClick={clickHandler} iconId="icon-arrow-up-right"></IconButton>
    </div>
  );
};

export default FollowerCard;
