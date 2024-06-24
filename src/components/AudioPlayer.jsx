"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

const AudioPlayer = ({ musicUrl, title, majlis, website, onNext }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRepeated, setIsRepeated] = useState(false);
  const darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

  useEffect(() => {
    // Reset audio when musicUrl changes
    if (musicUrl) {
      audioRef.current.load();
      setIsPlaying(true);
      audioRef.current.play();
      setProgress(0);
    }
  }, [musicUrl]);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleResetClick = () => {
    audioRef.current.currentTime = 0;
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  const handleRepeatClick = () => {
    setIsRepeated(!isRepeated);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;
      const newProgress = (currentTime / duration) * 100;
      setProgress(newProgress);

      if (currentTime >= duration) {
        // Song has finished, trigger the next song if available
        if (onNext) {
          onNext();
        }
        if (isRepeated) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }
      console.log(website);
    };

    audioElement.addEventListener("timeupdate", updateTime);

    return () => {
      audioElement.removeEventListener("timeupdate", updateTime);
    };
  }, [onNext, isRepeated]);

  return (
    <div className="py-4 px-6 rounded-lg shadow-2xl border border-slate-400  sticky top-0 bg-white dark:bg-primary w-full dark:text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full">
          {musicUrl ? (
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:text-greenl transition-all`}
              onClick={handlePlayPauseClick}
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-col items-start md:flex-row lg:items-center md:gap-8 w-full">
            <div className="lg:ml-4 px-3 lg:px-10">
              <p className="text-sm md:text-lg font-semibold">{title}</p>
              <a href={website} target="_blank" className="text-xs md:text-sm">
                {majlis}
              </a>
            </div>

            {musicUrl ? (
              <div className="flex-1 w-full px-3 relative items-center justify-center z-20">
                <input
                  type="range"
                  value={progress}
                  onChange={handleProgressChange}
                  min="0"
                  max="100"
                  className="w-full cstm-range -top-2 appearance-none focus:outline-none rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${
                      darkMode ? "white" : "green"
                    } 0%, ${
                      darkMode ? "white" : "green"
                    } ${progress}%, transparent ${progress}%, transparent 100%)`,
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Reset button */}
        <div className="flex items-center gap-2">
          <audio ref={audioRef} className="w-full">
            <source src={musicUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          {musicUrl ? (
            <div className="flex gap-4">
              <button
                onClick={handleResetClick}
                className="flex justify-center hover:text-greenl transition-all"
              >
                <FaRedo />
              </button>

              <button
                onClick={handleRepeatClick}
                className="flex justify-center hover:text-greenl text-black dark:text-white transition-all"
              >
                <FaRepeat
                  color={
                    isRepeated
                      ? darkMode
                        ? "green"
                        : "green"
                      : darkMode
                      ? "white"
                      : "black"
                  }
                />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
