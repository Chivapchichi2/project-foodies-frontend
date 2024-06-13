import FollowerCard from "./FollowerCard";
import styles from "./FollowerCard.module.css";

const FollowerCardList = ({ data }) => {
  return (
    <ul className={styles.followerCardList}>
      {data.map((el) => {
        <FollowerCard key={el.id} data={el} />;
      })}
    </ul>
  );
};

export default FollowerCardList;
