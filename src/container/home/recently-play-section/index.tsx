import { SongType } from "@/types/song.type";
import styles from "./recently-play-section.module.css";
import Song from "./song";

const songs: SongType[] = [
  {
    id: 1,
    image: "/image/music.jpg",
    title: "All that Jazz",
    artist: "Various Art",
  },
  {
    id: 2,
    image: "/image/music.jpg",
    title: "All that Jazz",
    artist: "Various Art",
  },
  {
    id: 3,
    image: "/image/music.jpg",
    title: "All that Jazz",
    artist: "Various Art",
  },
  {
    id: 4,
    image: "/image/music.jpg",
    title: "All that Jazz",
    artist: "Various Art",
  },
];
const RecentlyPlaySection = () => {
  return (
    <div className={styles.container}>
      <h4>Recently Played</h4>
      <div className={styles.songWrappper}>
        {songs.map((el) => (
          <Song data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlaySection;
