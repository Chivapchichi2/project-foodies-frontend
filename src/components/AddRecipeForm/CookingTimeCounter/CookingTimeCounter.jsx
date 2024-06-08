import css from './CookingTimeCounter.module.css';

const CookingTimeCounter = ({ cookingTime, setCookingTime }) => {
  const incrementCookingTime = () => {
    setCookingTime(prevTime => prevTime + 1);
  };

  const decrementCookingTime = () => {
    setCookingTime(prevTime => (prevTime > 1 ? prevTime - 1 : 1));
  };

  return (
    <div>
      <label>Cooking Time</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          className={css.counterBtn}
          type="button"
          onClick={decrementCookingTime}
        >
          -
        </button>
        <div>
          <span style={{ margin: '0 10px' }}>{cookingTime} min</span>
        </div>

        <button
          className={css.counterBtn}
          type="button"
          onClick={incrementCookingTime}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CookingTimeCounter;
