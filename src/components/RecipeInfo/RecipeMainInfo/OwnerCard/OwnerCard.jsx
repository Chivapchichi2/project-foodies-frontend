import styles from "./OwnerCard.module.css";
import withoutAvatar from "../../../../images/user_without_avatar.jpg";

export const OwnerCard = ({ owner }) => {
  const { avatar, name } = owner;

  return (
    <div className={styles.owner_card}>
      <img
        className={styles.owner_photo}
        src={avatar ? avatar : withoutAvatar}
        alt={`${name} photo`}
      />
      <div className={styles.owner_primary_info_wrapper}>
        <span className={styles.owner_sign}>Created by:</span>
        <h4>{name}</h4>
      </div>
    </div>
  );
};
