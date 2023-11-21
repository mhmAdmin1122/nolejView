import Image from "next/image";
import Link from "next/link";
import React from "react";
import cardPic from "@/public/img/47.jpg";

const PostCard = ({ cls, clas }: any) => {
  return (
    <div className={cls}>
      <div className={clas}>
        <div className="ImageBox w-[30%]">
          <Image
            src={cardPic}
            alt="Card Picture"
            className="w-[100%] h-[220px] opacity-50 transition-all duration-1000 hover:opacity-100"
          />
        </div>
        <div className="body_Card w-[70%] p-4 grid">
          <Link href={"/"}>
            <h1 className="font-bold text-lg pr-[14px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              culpa at eligendi hic.
            </h1>
          </Link>
          <p className="text-[#919191] text-justify py-2 pr-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            similique consectetur non ut consequuntur laboriosam necessitatibus
            doloribus atque. Nulla architecto eaque voluptatibus accusamus?
          </p>
          <Link
            href={"/"}
            className="bg-blue-700 w-fit text-[#fff] text-[16px] font-medium px-[12px] py-[8px] rounded-md"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>

      <div className={clas}>
        <div className="ImageBox w-[30%]">
          <Image
            src={cardPic}
            alt="Card Picture"
            className="w-[100%] h-[220px] opacity-50 transition-all duration-1000 hover:opacity-100"
          />
        </div>
        <div className="body_Card w-[70%] p-4 grid">
          <Link href={"/"}>
            <h1 className="font-bold text-lg pr-[14px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              culpa at eligendi hic.
            </h1>
          </Link>
          <p className="text-[#919191] text-justify py-2 pr-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            similique consectetur non ut consequuntur laboriosam necessitatibus
            doloribus atque. Nulla architecto eaque voluptatibus accusamus?
          </p>
          <Link
            href={"/"}
            className="bg-blue-700 w-fit text-[#fff] text-[16px] font-medium px-[12px] py-[8px] rounded-md"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
