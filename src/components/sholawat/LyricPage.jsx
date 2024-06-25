import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import AudioPlayer from "../AudioPlayer";
import BackToTop from "../BackToTop";

const LyricPage = ({ lyric }) => {
  return (
    <div className="pt-10 pb-20">
      <div className="main flex flex-col gap-4">
        <Link
          href={`/`}
          className="bg-primary text-white rounded-lg py-4 cursor-pointer"
        >
          <div className="flex justify-between items-center px-6">
            <FaArrowLeft />
            <h1 className="text-md">{lyric.title}</h1>
          </div>
        </Link>

        <div className="p-5 bg-primary text-white rounded-lg">
          <div className="sticky top-16 z-40 w-full">
            <AudioPlayer
              musicUrl={lyric.music_url}
              title={lyric.title}
              majlis={lyric.majlis}
              website={lyric.website}
            />
          </div>
          <div className="py-10">
            {lyric.lyrics.map((line, index) => (
              <div key={index}>
                <p className="text-right pb-10 pt-16 text-2xl md:text-3xl font-Sche leading-loose select-none">
                  {line.text}
                </p>
                <p
                  className={`font-Quisand text-left text-sm md:text-left py-2 font-semibold text-greenl dark:text-white ${
                    line.latin ? "flex" : "none"
                  }`}
                >
                  {line.latin}
                </p>
                <p
                  className={`font-Quisand text-left md:text-left ${
                    line.latin
                      ? "border-t text-slate-400 text-xs"
                      : "border-t text-slate-400 text-sm"
                  } py-2`}
                >
                  {line.translation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default LyricPage;
