import Link from "next/link";
import React from "react";
import { MdStars } from "react-icons/md";

const PopularCourse = () => {
  return (
    <div>
      <div className="titleHeader mt-2 flex flex-wrap justify-between items-center py-2 px-4 bg-blue-500 rounded-sm text-[#fff] cursor-context-menu">
        <b className="text-2xl">
          <MdStars />
        </b>
        <b>Popular Courses</b>
      </div>
      <ol className="card_Button mt-2 flex gap-3 flex-wrap justify-center items-center">
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            Development and IT
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            SEO
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            Graphic Designing
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            Blogging
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            Youtube Mastry
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            Social Media Purchasing and Selling
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            WordPress & Elementer
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            Digital Marketing
          </li>
        </Link>
        <Link href={"/"}>
          <li className="px-4 py-2 bg-green-600 text-[#fff] font-bold text-center text-lg rounded-md cursor-pointer">
            ADS Services Course
          </li>
        </Link>
      </ol>
    </div>
  );
};

export default PopularCourse;
