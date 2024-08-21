import { CirclePlay } from "lucide-react";
import styles from "./banner-section.module.css";
const BannerSection = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.banner}>
        <h2>GET LOST</h2>
        <p>in your music</p>
        <CirclePlay className={styles.icon} />
      </div>
      <div className={styles.banner}>
        <h2>MELLOW</h2>
        <p>beats</p>
        <CirclePlay className={styles.icon} />
      </div>
    </div>
  );
};

export default BannerSection;
