import Image from "next/image";
import styles from "./album.module.css";
const Album = () => {
  return (
    <div>
      <div className={styles.imageWrapper}>
        <Image src={"/image/music.jpg"} fill alt="artist" />
      </div>
      <div className={styles.albumTitle}>Best of Blues</div>
      <div className={styles.albumArtist}>Jazzmaster Bill</div>
    </div>
  );
};

export default Album;
