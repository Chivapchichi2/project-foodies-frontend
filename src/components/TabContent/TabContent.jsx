import { useEffect, useState } from "react";
import styles from "./TabContent.module.css";
import TabMenu from "../TabMenu/TabMenu";
import { useSelector } from "react-redux";
import { selectIsAuthorizedUser, selectUserProfile } from "../../store/features/profileSlice.js";
import SmallRecipeCardList from "../SmallRecipeCard/SmallRecipeCardList.jsx";
import FollowerCardList from "../FollowerCard/FollowerCardList.jsx";

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
  const isAuthorizedUser = useSelector(selectIsAuthorizedUser);
  const userPrifileData = useSelector(selectUserProfile);

  const myRecipes = userPrifileData?.createdRecipesCount;
  const favoriteRecipes = userPrifileData?.favoriteRecipesCount?.data.map((item) => {
    return item.recipe;
  });

  const [activeTab, setActiveTab] = useState(
    isAuthorizedUser ? myProfileTabs[0].id : userProfileTabs[0].id
  );

  useEffect(() => {
    setActiveTab(isAuthorizedUser ? myProfileTabs[0].id : userProfileTabs[0].id);
  }, [isAuthorizedUser]);

  const getMessage = (profile, tab) => {
    const profileData = profile.find(({ id }) => id === tab);
    return profileData.message;
  };

  const renderContent = () => {
    if (isAuthorizedUser) {
      switch (activeTab) {
        case "my-recipes":
          if (myRecipes.total > 0) {
            return <SmallRecipeCardList data={myRecipes.data} />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;

        case "my-favorites":
          if (favoriteRecipes.length > 0) {
            return <SmallRecipeCardList data={favoriteRecipes} />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;

        case "followers":
          if (myRecipes.total > 0) {
            return <FollowerCardList data={myRecipes.data} tab="followers" />;
          } else return <p className={styles.message}>{getMessage(myProfileTabs, activeTab)}</p>;
        case "following":
          if (favoriteRecipes.length > 0) {
            return <FollowerCardList data={favoriteRecipes} tab="following" />;
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
          if (favoriteRecipes?.length > 0) {
            return <FollowerCardList data={myRecipes.data} tab="followers" />;
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
