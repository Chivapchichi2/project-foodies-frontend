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

import { Loader } from "../shared/Loader/Loader.jsx";

import Pagination from "../Pagination/Pagination.jsx";

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
  const userFollowers = useSelector(selectFollowers);
  const userFollowing = useSelector(selectFollowing);
  const userFavoriteRecipes = useSelector(selectFavoritesRecipes);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [activeTab, setActiveTab] = useState(
    isAuthorizedUser ? myProfileTabs[0].id : userProfileTabs[0].id
  );

  const { data: myRecipes, isLoading: loadRecipes } = useFetchUserRecipesQuery({
    userId: id,
    page: currentPage,
  });

  // add checks for tab, as in the function bellow
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setActiveTab(isAuthorizedUser ? myProfileTabs[0].id : userProfileTabs[0].id);
  }, [isAuthorizedUser]);

  const { data: favoriteRecipes, isLoading: loadFavorite } = useFetchUserFavoritesRecipesQuery({
    page: currentPage,
    skip: activeTab !== "my-favorites",
  });

  const { data: followersData, isLoading: loadFollowers } = useFetchUserFollowersQuery({
    userId: id,
    page: currentPage,
    skip: activeTab !== "followers",
  });

  const { data: followingData, isLoading: loadFollowing } = useFetchUserFollowingQuery({
    skip: activeTab !== "following",
    page: currentPage,
  });
  const isDataLoading = loadRecipes || loadFavorite || loadFollowers || loadFollowing;

  useEffect(() => {
    if (!loadRecipes) {
      setTotalPages(myRecipes.totalPages);
    }
    if (activeTab === "followers" && followersData) {
      setTotalPages(followersData.totalPages);
      dispatch(setUserFollowers(followersData.followersWithRecipes));
    } else if (activeTab === "following" && followingData) {
      setTotalPages(followingData.totalPages);
      dispatch(setUserFollowing(followingData.followingWithRecipes));
    } else if (activeTab === "my-favorites" && favoriteRecipes) {
      setTotalPages(favoriteRecipes.totalPages);
      const favoriteRecipesProccessed = favoriteRecipes?.data.map((item) => {
        return item.recipe;
      });
      dispatch(setUserFavoritesRecipes({ data: favoriteRecipesProccessed }));
    }
  }, [
    activeTab,
    dispatch,
    followersData,
    followingData,
    favoriteRecipes,
    loadRecipes,
    myRecipes,
    currentPage,
  ]);

  // useEffect(() => {
  // add logic for update if data in store was changed (added/deleted)
  // }, [selectRecipes, userFavoriteRecipes, userFollowers, userFollowing]);

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
      {isDataLoading ? <Loader /> : <div className={styles.content}>{renderContent()}</div>}
      {totalPages > 1 && (
        <Pagination
          pageCount={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default TabContent;
