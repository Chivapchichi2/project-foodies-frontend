import styles from "./OwnerCard.module.css";

export const OwnerCard = () => {
  const data = {
    _id: {
      $oid: "64c8d958249fae54bae90bb9",
    },
    name: "GoIT",
    avatar: "https://images.genius.com/20c6c4552548a217189a1e56c6433945.1000x1000x1.png",
    email: "goit@gmail.com",
    followers: [],
    following: [],
  };

  return (
    <div className={styles.owner_card}>
      <img className={styles.owner_photo} src={data.avatar} alt={`${data.name} photo`} />
      <div className={styles.owner_primary_info_wrapper}>
        <span className={styles.owner_sign}>Created by:</span>
        <h4>{data.name}</h4>
      </div>
    </div>
  );
};
