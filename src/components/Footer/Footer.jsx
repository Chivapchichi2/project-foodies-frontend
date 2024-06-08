import Icon from "../shared/Icon/Icon";
import styles from "./Footer.module.css";
import cx from "classnames";

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrap_footer}>
        <a className={styles.logo} href="/" aria-label="Logo Foodies">
          <p>Foodies</p>
        </a>
        <ul className={styles.list_social}>
          <li className={styles.item_social}>
            <a href="https://www.facebook.com/goITclub/" target="_blank">
              <Icon iconId="icon-facebook" width="20" height="20" style={cx(styles.icon)} />
            </a>
          </li>
          <li className={styles.item_social}>
            <a href="https://www.instagram.com/goitclub/" target="_blank">
              <Icon iconId="icon-instagram" width="20" height="20" style={cx(styles.icon)} />
            </a>
          </li>
          <li className={styles.item_social}>
            <a href="https://www.youtube.com/c/GoIT" target="_blank">
              <Icon iconId="icon-youtube" width="20" height="20" style={cx(styles.icon)} />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copr}>@2024, Foodies. All rights reserved</p>
    </footer>
  );
};

export default Footer;