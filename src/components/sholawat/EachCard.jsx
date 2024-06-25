import Link from "next/link";

const EachCard = ({ majelis, lyrics }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center w-full">
      {lyrics.map((data, index) => (
        <Link
          prefetch={false}
          key={index}
          href={`/sholawat/${majelis}/${data.id}`}
          className="p-2 rounded-md border border-transparent bg-secondary text-white font-Quisand text-sm cursor-pointer w-full md:w-fit hover:bg-transparent anim hover:border-secondary"
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
};

export default EachCard;
