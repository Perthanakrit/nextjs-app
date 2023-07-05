import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  key: string;
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Movie({
  key,
  id,
  title,
  poster_path,
  release_date,
}: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className=" mx-6">
      <Link href={`/movie/${id}`}>
        <Image
          alt="movie poster"
          width={150}
          height={100}
          src={imagePath + poster_path}
        />
      </Link>
      <b className=" text-ellipsis">{title}</b>
      <h2>{release_date}</h2>
    </div>
  );
}
