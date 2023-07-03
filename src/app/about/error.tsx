// specific filename
"use client"; // บังคับให้ compenent นี เป็น client component
import React from "react";

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              401 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Sorry, Something went wrong.
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Error is occurred upon fetching data.
            </p>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0"></div>
        </div>
      </section>
    </>
  );
}
