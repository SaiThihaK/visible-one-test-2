import { FC } from "react";
import BannerSection from "./banner-section";
import styles from "./home.module.css";
import RecentlyPlaySection from "./recently-play-section";
import RecommendSection from "./recommend-section";
const HomeContainer: FC = () => {
  return (
    <div className={styles.container}>
      <BannerSection />
      <div className={styles.wrapper}>
        <RecentlyPlaySection />
        <RecommendSection />
      </div>
    </div>
  );
};

export default HomeContainer;
