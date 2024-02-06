import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sphark Labs</div>
      <div className={styles.text}>Sphark Labs LLC © All Rights Reserved</div>
    </div>
  );
};

export default Footer;
