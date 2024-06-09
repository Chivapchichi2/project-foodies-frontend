import styles from "./Input.module.css";
import Icon from "../Icon/Icon.jsx";

export const Input = ({
  placeholder,
  iconId,
  type,
  togglePasswordVisibility,
  register,
  name,
  hasText,

  className,
}) => {
  const handleClickEye = () => {
    togglePasswordVisibility();
  };

  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${(hasText ? styles.hasText : "", className)}`}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      {iconId && (
        <button className={styles.btn} onClick={handleClickEye} type="button">
          <Icon iconId={iconId} width={16} height={16} />
        </button>
      )}
    </div>
  );
};
