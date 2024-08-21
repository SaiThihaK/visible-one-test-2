"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./musicplayer.module.css";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  List,
  Monitor,
} from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

const MusicPlayer = () => {
  const { data, error } = useSWR(
    "https://www.theaudiodb.com/api/v1/json/2/searchtrack.php?s=coldplay&t=yellow",
    fetcher
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100); // Default volume value
  const [playbackError, setPlaybackError] = useState(false); // To handle playback errors

  const audioRef = useRef<HTMLAudioElement>(null);

  const track = data?.track?.[0];

  useEffect(() => {
    if (audioRef.current && track?.strPreview) {
      audioRef.current.src = track.strPreview;
    }
  }, [track]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement?.currentTime || 0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioElement?.duration || 0);
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setPlaybackError(false);
            })
            .catch((error) => {
              console.error("Playback failed:", error);
              setPlaybackError(true);
              // Show UI element to let the user manually start playback if needed
            });
        } else {
          // Fallback for browsers that don't support the Promise-based play() method
          setIsPlaying(true);
        }
      }
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setCurrentTime(Number(e.target.value)); // Sync the state
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newVolume = Number(e.target.value) / 100;
      audioRef.current.volume = newVolume;
      setVolume(Number(e.target.value));
    }
  };

  if (error) return <div>Failed to load track</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.playerContainer}>
      <audio ref={audioRef} src={track?.strPreview || ""}></audio>
      <div className={styles.albumArt}></div>
      <div className={styles.trackInfo}>
        <h4 className={styles.trackTitle}>{track?.strTrack}</h4>
        <p className={styles.artistName}>{track?.strArtist}</p>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton}>
          <Shuffle size={18} />
        </button>
        <button className={styles.controlButton}>
          <SkipBack size={18} />
        </button>
        <button className={styles.playButton} onClick={togglePlayPause}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button className={styles.controlButton}>
          <SkipForward size={18} />
        </button>
        <button className={styles.controlButton}>
          <Repeat size={18} />
        </button>
      </div>
      <div className={styles.progressContainer}>
        <span className={styles.currentTime}>
          {Math.floor(currentTime / 60)}:
          {Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0")}
        </span>
        <div className={styles.progressBarWrapper}>
          <input
            type="range"
            className={styles.progressBar}
            value={currentTime}
            max={duration}
            onChange={handleProgressChange}
          />
        </div>
        <span className={styles.totalTime}>
          {Math.floor(duration / 60)}:
          {Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}
        </span>
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
          <input
            type="range"
            className={styles.volumeBar}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
