"use client";

import { usePathname } from "next/navigation";
import { SholawatLyric } from "@/lib/data";
import React, { useEffect, useState } from "react";
import NotFound from "@/app/not-found";
import LyricPageT from "@/components/sholawat/LyricPageT";
import LyricPage from "@/components/sholawat/LyricPage";

const LyricDetail = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const majelis = decodeURIComponent(pathSegments[2]);
  const id = parseInt(pathSegments[3]);

  const [lyric, setLyric] = useState(null);

  useEffect(() => {
    if (majelis && id) {
      const majelisData = SholawatLyric.find(
        (item) => item.majelis === majelis
      );
      if (majelisData) {
        const foundLyric = majelisData.lyrics.find((lyric) => lyric.id === id);
        setLyric(foundLyric);
      }
    }
  }, [majelis, id]);

  if (!lyric) {
    return (
      <div className="text-black">
        <NotFound />
      </div>
    );
  }
  return (
    <div className="bg-secondary h-auto">
      {lyric.v === false || lyric.v === undefined ? (
        <LyricPage lyric={lyric} />
      ) : (
        <LyricPageT lyric={lyric} />
      )}
    </div>
  );
};

export default LyricDetail;
