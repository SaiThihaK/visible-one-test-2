import Album from "./ablum";
import styles from "./recommend-section.module.css";
const RecommendSection = () => {
  return (
    <div className={styles.container}>
      <h4>Recommended For You</h4>
      <div className={styles.albumWrapper}>
        <Album />
        <Album />
        <Album />
      </div>
    </div>
  );
};

export default RecommendSection;
