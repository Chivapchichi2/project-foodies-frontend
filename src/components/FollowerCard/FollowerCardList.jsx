import FollowerCard from "./FollowerCard.jsx";
import styles from "./FollowerCard.module.css";

const FollowerCardList = ({ data, btnText, handleFollowUser, handleUnfollowUser }) => {
  return (
    <ul className={styles.followerCardList}>
      {data.map((el) => (
        <FollowerCard
          key={el._id}
          data={el}
          btnText={btnText}
          handleFollowUser={handleFollowUser}
          handleUnfollowUser={handleUnfollowUser}
        />
      ))}
    </ul>
  );
};

export default FollowerCardList;
