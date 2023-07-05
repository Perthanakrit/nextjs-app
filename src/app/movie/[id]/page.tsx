import Image from "next/image";
import React from "react";

type Props = {
  params: any;
};

export default async function MovieDetail({ params }: Props) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  const data = await fetch(url, { next: { revalidate: 10 } });
  const result = await data.json();

  return (
    <div className=" content-center mx-7">
      <h2 className=" text-4xl">{result.title}</h2>
      <h2 className=" text-4xl">Runtime: {result.runtime}</h2>
      <Image
        alt={result.title}
        width={600}
        height={600}
        className=" my-12 w-full"
        src={imagePath + result.backdrop_path}
        priority
      />
      <p className=" my-10 px-6">{result.overview}</p>
    </div>
  );
}
