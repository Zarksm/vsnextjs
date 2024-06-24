import Link from "next/link";
import React from "react";

const EachCard = ({ majelis, lyrics }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {lyrics.map((data, index) => (
        <Link
          key={index}
          href={`/sholawat/${majelis}/${data.id}`}
          className="p-2 rounded-md border border-transparent bg-secondary text-white font-Quisand text-sm cursor-pointer w-fit hover:bg-transparent anim hover:border-secondary"
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
};

export default EachCard;
