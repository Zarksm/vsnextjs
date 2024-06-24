import React from "react";

const LyricPageT = ({ lyric }) => {
  return (
    <div className="w-full lg:px-52 pt-10 pb-20 shadow-xl select-none">
      <div className="bg-lprimary dark:bg-primary p-5 md:p-10 rounded-sm border-t border-white rounded-b-lg">
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
