import styles from './Input.module.css';

export const Input = ({placeholder, svg, type, togglePasswordVisibility, register, name, hasText}) => {

    const handleClickEye = () => {
        togglePasswordVisibility()
    };

    if (!svg) return <input
        className={`${styles.input} ${hasText ? styles.hasText : ''}`}
        placeholder = {placeholder}
        type={type}
        {...register(name, { required: true })}
    />;

    return (
        <div className = { styles.container }>
            <input
                className={`${styles.input} ${hasText ? styles.hasText : ''}`}
                placeholder = {placeholder}
                type={type}
                {...register(name)}
            />
            <button className={styles.btn} onClick={handleClickEye} type="button">
                <img src={svg} alt={placeholder} width={18} height={18}/>
            </button>
        </div>
    );

}