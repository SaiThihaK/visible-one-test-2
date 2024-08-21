import {
  AudioLines,
  AudioWaveform,
  ChartSpline,
  CirclePlus,
  Disc,
  House,
  Users,
} from "lucide-react";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styles from "./sidebar.module.css";
type Props = {
  children: ReactNode;
};

type BrowseItemType = {
  icon: ReactNode;
  title: string;
};

type PlayListType = {
  title: string;
};

const browseItems: BrowseItemType[] = [
  { icon: <House />, title: "Home" },
  { icon: <Disc />, title: "Songs" },
  { icon: <AudioWaveform />, title: "Playlist" },
  { icon: <Users />, title: "Just For You" },
  { icon: <ChartSpline />, title: "Just For You" },
];

const playlist: PlayListType[] = [
  { title: "Workout Mix" },
  { title: "Chillin at Home" },
  { title: "Booping at Adobe" },
  { title: "XD 4 life" },
];

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.avatar}>
          <Image
            src={"/image/profile.jpg"}
            alt="profile"
            width={40}
            height={40}
          />
          <div>
            <span>Joshua</span>
            <div className={styles.badge}>premium</div>
          </div>
        </div>
        <div className={styles.navContainer}>
          <h2>Browse</h2>
          <div>
            {browseItems.map((el, index) => (
              <div key={index} className={styles.navlink}>
                {el.icon}
                <span>{el.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.navContainer}>
          <h2 className={styles.playlistTitle}>
            <span>Your PlayList</span> <CirclePlus />
          </h2>
          <div>
            {playlist.map((el, index) => (
              <div key={index} className={styles.navlink}>
                <AudioLines />
                <span>{el.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Sidebar;
