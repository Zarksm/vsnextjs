import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import AudioPlayer from "../AudioPlayer";

const LyricPageT = ({ lyric }) => {
  return (
    <div className="w-full main select-none pt-10 pb-20 flex flex-col gap-3">
      <Link
        href={`/`}
        className="bg-primary text-white rounded-lg py-4 cursor-pointer"
      >
        <div className="flex justify-between items-center px-6 ">
          <FaArrowLeft />
          <h1 className="text-md">{lyric.title}</h1>
        </div>
      </Link>
      <div className="bg-lprimary dark:bg-primary p-5 md:p-10 rounded-lg">
        <AudioPlayer
          musicUrl={lyric.music_url}
          title={lyric.title}
          majlis={lyric.majlis}
        />

        <div className="mt-20 dark:text-white notranslate">
          {lyric.lyrics.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-center mb-8"
            >
              {item.text && (
                <p className="text-right pt-16 text-2xl md:text-3xl font-Sche leading-loose select-none">
                  {item.text}
                </p>
              )}
              {item.latin && (
                <p className="font-Quisand text-left text-sm md:text-left py-2">
                  {item.latin}
                </p>
              )}
              <div className="font-Quisand text-center py-5">
                {item.translation.p1 && <p>{item.translation.p1}</p>}
                {item.translation.p2 && <p>{item.translation.p2}</p>}
                {item.translation.p3 && <p>{item.translation.p3}</p>}
                {item.translation.p4 && <p>{item.translation.p4}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LyricPageT;
