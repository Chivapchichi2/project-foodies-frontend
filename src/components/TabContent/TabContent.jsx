import { useEffect, useState } from "react";
import styles from "./TabContent.module.css";
import TabMenu from "../TabMenu/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoritesRecipes,
  selectFollowers,
  selectFollowing,
  selectIsAuthorizedUser,
} from "../../store/selectors/profileSelectors.js";
import SmallRecipeCardList from "../SmallRecipeCard/SmallRecipeCardList.jsx";
import FollowerCardList from "../FollowerCard/FollowerCardList.jsx";
import {
  useFetchUserFavoritesRecipesQuery,
  useFetchUserFollowersQuery,
  useFetchUserFollowingQuery,
  useFetchUserRecipesQuery,
} from "../../store/services/profileService.js";
import { useParams } from "react-router-dom";
import {
  setUserFavoritesRecipes,
  setUserFollowers,
  setUserFollowing,
} from "../../store/features/profileSlice.js";

const myProfileTabs = [
  {
    id: "my-recipes",
    label: "MY RECIPES",
    message:
      "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future.",
  },
  {
    id: "my-favorites",
    label: "MY FAVORITES",
    message:
      "Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future.",
  },
  {
    id: "followers",
    label: "FOLLOWERS",
    message:
      "There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile.",
  },
  {
    id: "following",
    label: "FOLLOWING",
    message:
      "Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you.",
  },
];

const userProfileTabs = [
  { id: "recipes", label: "RECIPES", message: "The current user hasn't added any recipes yet." },
  {
    id: "followers",
    label: "FOLLOWERS",
    message: "The current user hasn't any followers yet.",
  },
];

const TabContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAuthorizedUser = useSelector(selectIsAuthorizedUser);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const userFollowers = useSelector(selectFollowers);
  const userFollowing = useSelector(selectFollowing);
  const userFavoriteRecipes = useSelector(selectFavoritesRecipes);

  const [activeTab, setActiveTab] = useState(
    isAuthorizedUser ? myProfileTabs[0].id : userProfileTabs[0].id
  );

  useEffect(() => {
    setActiveTab(isAuthorizedUser ? myProfileTabs[0].id : userProfileTabs[0].id);
  }, [isAuthorizedUser]);

  const { data: myRecipes } = useFetchUserRecipesQuery(id);

  const { data: favoriteRecipes } = useFetchUserFavoritesRecipesQuery(
    { userId: id },
    {
      skip: activeTab !== "my-favorites",
    }
  );

  const { data: followersData } = useFetchUserFollowersQuery(
    { userId: id },
    {
      skip: activeTab !== "followers",
    }
  );

  const { data: followingData } = useFetchUserFollowingQuery(
    { userId: id },
    {
      skip: activeTab !== "following",
    }
  );

  useEffect(() => {
    if (activeTab === "followers" && followersData) {
      dispatch(setUserFollowers(followersData.followersWithRecipes));
    } else if (activeTab === "following" && followingData) {
      dispatch(setUserFollowing(followingData.followingWithRecipes));
    } else if (activeTab === "my-favorites" && favoriteRecipes) {
      const favoriteRecipesProccessed = favoriteRecipes?.data.map((item) => {
        return item.recipe;
      });
      dispatch(setUserFavoritesRecipes({ data: favoriteRecipesProccessed }));
    }
  }, [activeTab, dispatch, followersData, followingData, favoriteRecipes]);

  const getMessage = (profile, tab) => {
    const profileSetup = profile.find(({ id }) => id === tab);
    return profileSetup.message;
  };

  const renderContent = () => {
    if (isAuthorizedUser) {
      switch (activeTab) {
        case "my-recipes":
          if (myRecipes?.total > 0) {
            return <SmallRecipeCardList data={myRecipes.data} tab="recipe" />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;

        case "my-favorites":
          if (userFavoriteRecipes?.length > 0) {
            return <SmallRecipeCardList data={userFavoriteRecipes} tab="favorites" />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;

        case "followers":
          if (userFollowers?.length > 0) {
            return <FollowerCardList data={userFollowers} btnText="follow" />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;

        case "following":
          if (userFollowing?.length > 0) {
            return <FollowerCardList data={userFollowing} btnText="unfollow" />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;
        default:
          return null;
      }
    } else {
      switch (activeTab) {
        case "recipes":
          if (myRecipes?.total > 0) {
            return <SmallRecipeCardList data={myRecipes.data} />;
          } else return <p className={styles.message}>{getMessage(userProfileTabs, activeTab)}</p>;
        case "followers":
          if (userFollowers?.length > 0) {
            return <FollowerCardList data={userFollowers} btnText="follow" />;
          } else return <p className={styles.message}>{getMessage(userProfileTabs, activeTab)}</p>;
        default:
          return null;
      }
    }
  };
  const menuItems = isAuthorizedUser ? myProfileTabs : userProfileTabs;

  return (
    <div className={styles.container}>
      <TabMenu menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default TabContent;
