import { toCapitalize } from "../../helpers/toCapitalize";
import styles from "./ProfileBigCard.module.css";

export const ProfileInfoItem = ({ name, value }) => {
  const CONSTATNTS_NAME = {
    email: "email",
    createdRecipesCount: "added recipes",
    favoriteRecipesCount: "favorites",
    followersCount: "followers",
    followingCount: "following",
  };

  return (
    <li className={styles.profile_info_item}>
      {toCapitalize(CONSTATNTS_NAME[name])}:
      <span className={styles.profile_info_content}>{value}</span>
    </li>
  );
};
