import { SongType } from "@/types/song.type";
import { Ellipsis, Heart } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import styles from "./song.module.css";
type Props = {
  data: SongType;
};

const Song: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image src={data.image} width={30} height={30} alt={data.title} />
        <div>{data.title}</div>
      </div>
      <div className={styles.artistTitle}>{data.artist}</div>
      <Heart />
      <Ellipsis />
    </div>
  );
};

export default Song;
