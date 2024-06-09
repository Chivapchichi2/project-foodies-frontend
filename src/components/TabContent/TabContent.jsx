import React, { useState } from "react";
import styles from "./TabContent.module.css";
import TabMenu from "../TabMenu/TabMenu";

const myProfileTabs = [
  { id: "my-recipes", label: "MY RECIPES" },
  { id: "my-favorites", label: "MY FAVORITES" },
  { id: "followers", label: "FOLLOWERS" },
  { id: "following", label: "FOLLOWING" },
];

const userProfileTabs = [
  { id: "recipes", label: "RECIPES" },
  { id: "followers", label: "FOLLOWERS" },
];

const TabContent = () => {
  const [isMyProfile, setIsMyProfile] = useState(true);
  const [activeTab, setActiveTab] = useState(
    isMyProfile ? myProfileTabs[0].id : userProfileTabs[0].id
  );

  const renderContent = () => {
    if (isMyProfile) {
      switch (activeTab) {
        case "my-recipes":
          return <div>MY RECIPES</div>;
        case "my-favorites":
          return <div>MY FAVORITES</div>;
        case "followers":
          return <div>FOLLOWERS</div>;
        case "following":
          return <div>FOLLOWING</div>;
        default:
          return null;
      }
    } else {
      switch (activeTab) {
        case "recipes":
          return <div>RECIPES</div>;
        case "followers":
          return <div>FOLLOWERS</div>;
        default:
          return null;
      }
    }
  };
  const menuItems = isMyProfile ? myProfileTabs : userProfileTabs;

  return (
    <div className={styles.container}>
      <TabMenu menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default TabContent;
