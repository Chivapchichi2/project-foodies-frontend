import FollowerCard from "./FollowerCard.jsx";
import styles from "./FollowerCard.module.css";

const FollowerCardList = ({ data, btnText }) => {
  return (
    <ul className={styles.followerCardList}>
      {data.map((el) => (
        <FollowerCard key={el._id} data={el} btnText={btnText} />
      ))}
    </ul>
  );
};

export default FollowerCardList;
