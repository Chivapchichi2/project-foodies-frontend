import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./FollowerCard.module.css";
import SmallRecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto.jsx";
import { useResponsiveValue } from "../../utilities/index.js";

const FollowerCard = () => {
  const recipeCardsVisability = useResponsiveValue(768, false, 3);
  const recipeCardsQuantity = useResponsiveValue(1440, 3, 4);

  const goToProfileDetail = () => console.log(`Go to ${data._id} User Profile`);

  const data = {
    _id: "34567890hg567890",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    name: "Test Name",
    followers: 10,
    createdRecipesCount: {
      total: 4,
      data: [
        {
          _id: "66661e67b82345fadcb51e95",
          title: "Beef Brisket Pot Roast",
          thumb: "https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg",
        },
        {
          _id: "66661e67b82345fadcb51e96",
          title: "Beef Brisket Pot Roast",
          thumb: "https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg",
        },
        {
          _id: "66661e67b82345fadcb51e97",
          title: "Beef Brisket Pot Roast",
          thumb: "https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg",
        },
        {
          _id: "66661e67b82345fadcb51e98",
          title: "Beef Brisket Pot Roast",
          thumb: "https://ftp.goit.study/img/so-yummy/preview/Lancashire%20hotpot.jpg",
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
          <p className={styles.descr}>Own recipes: {data.createdRecipesCount.total}</p>
          <Button text="Follow" variant="follow_user" />
        </div>
      </div>
      {recipeCardsVisability && (
        <ul className={styles.recipesList}>
          {data?.createdRecipesCount?.data.map((recipe, idx) => {
            if (idx < recipeCardsQuantity) {
              return (
                <li key={recipe._id}>
                  <SmallRecipePhoto imgUrl={recipe.thumb} title={recipe.title} />
                </li>
              );
            }
          })}
        </ul>
      )}
      <IconButton onClick={goToProfileDetail} iconId="icon-arrow-up-right"></IconButton>
    </div>
  );
};

export default FollowerCard;
