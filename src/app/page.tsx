import Image from "next/image";
import Link from "next/link";
import React from "react";
import Movie from "./movie";

type Props = {};

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  const data = await fetch(url);
  const result = await data.json();

  return (
    <div className="grid gap-2 grid-cols-fluid">
      {result.results.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
}
