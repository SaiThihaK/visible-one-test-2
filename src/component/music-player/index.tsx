import styles from "./musicplayer.module.css";
import {
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  List,
  Monitor,
} from "lucide-react";

const MusicPlayer = () => {
  return (
    <div className={styles.playerContainer}>
      <div className={styles.albumArt}></div>
      <div className={styles.trackInfo}>
        <h4 className={styles.trackTitle}>Mind-Blowing</h4>
        <p className={styles.artistName}>Various Artists</p>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton}>
          <Shuffle size={18} />
        </button>
        <button className={styles.controlButton}>
          <SkipBack size={18} />
        </button>
        <button className={styles.playButton}>
          <Play size={20} />
        </button>
        <button className={styles.controlButton}>
          <SkipForward size={18} />
        </button>
        <button className={styles.controlButton}>
          <Repeat size={18} />
        </button>
      </div>
      <div className={styles.progressContainer}>
        <span className={styles.currentTime}>0:00</span>
        <div className={styles.progressBarWrapper}>
          <input type="range" className={styles.progressBar} />
        </div>
        <span className={styles.totalTime}>9:10</span>
      </div>
      <div className={styles.volumeContainer}>
        <button className={styles.controlButton}>
          <List size={18} />
        </button>
        <button className={styles.controlButton}>
          <Monitor size={18} />
        </button>
        <button className={styles.controlButton}>
          <Volume2 size={18} />
        </button>
        <div className={styles.volumeBarWrapper}>
          <input type="range" className={styles.volumeBar} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
