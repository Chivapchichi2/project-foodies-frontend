import styles from "./Button.module.css";
import cx from "classnames";
import {useEffect} from "react";

const Button = ({
  text = "Button",
  onClick = () => {},
  variant = "button",
  type = "button",
  classname,
                  id,
}) => {
  useEffect(() => {
    if(id){
      const btn = document.querySelector(`#${id}`);
      if(btn) {
        btn.onmousemove = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          btn.style.setProperty("--x", x + "px");
          btn.style.setProperty("--y", y + "px");
        }
      }
    }
  }, [id]);

  return (
    <button type={type} className={cx(styles.button, styles[variant], classname)} onClick={onClick} id={id}>
      {text}
    </button>
  );
};

export default Button;
