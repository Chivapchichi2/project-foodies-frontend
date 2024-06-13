import FollowerCard from "./FollowerCard";

const FollowerCardList = ({ data }) => {
  return (
    <ul>
      {data.map((el) => {
        <FollowerCard key={el.id} data={el} />;
      })}
    </ul>
  );
};

export default FollowerCardList;
