import IconButton from "../../shared/IconButton/IconButton";
import styles from "./CookingTimeCounter.module.css";
import cx from "classnames";

const CookingTimeCounter = ({ cookingTime, setCookingTime }) => {
  const incrementCookingTime = () => {
    setCookingTime((prevTime) => prevTime + 1);
  };

  const decrementCookingTime = () => {
    setCookingTime((prevTime) => (prevTime > 1 ? prevTime - 1 : 1));
  };

  return (
    <div>
      <label>Cooking Time</label>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <IconButton
          iconId="icon-minus"
          width="16"
          height="16"
          type="button"
          style={cx(styles.iconBtn)}
          onClick={decrementCookingTime}
        />

        <div>
          <span style={{ margin: "0 12px" }}>{cookingTime} min</span>
        </div>

        <IconButton
          iconId="icon-plus"
          type="button"
          width="16"
          height="16"
          style={cx(styles.iconBtn)}
          styleSVG={cx(styles.icon)}
          onClick={incrementCookingTime}
        />
      </div>
    </div>
  );
};

export default CookingTimeCounter;
