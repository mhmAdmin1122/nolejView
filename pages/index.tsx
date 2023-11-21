import Head from "next/head";
import Layout from "./components/Layout";
import PostCard from "./components/Home Page/PostCard";
import HomeComponents from "./components/Home Page/HomeComponents";
import SideBar from "./components/Home Page/SideBar";
import Link from "next/link";
import { BsFillGridFill, BsListUl  } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
  const [isListActive, setIsListActive] = useState(true);
  const [isGridActive, setIsGridActive] = useState(false);

  const handleListClick = (event:any) => {
    setIsListActive(true);
    setIsGridActive(false)
  };
  const handleGridClick = (event:any) => {
    setIsGridActive(true);
    setIsListActive(false);
  };
  return (
    <>
      <Head>
        <title>Nolej View</title>
      </Head>
      <Layout>
        <HomeComponents>
          <div className="w-[75%] p-[24px]">
            <div className="flex items-center justify-between bg-[#fff] border-l-[5px] border-[#a73263] p-[8px] rounded-sm">
              <b>Read Posts</b>
              <div className="grid-morebtn">
                <button onClick={handleListClick}>
                  <BsListUl  />
                </button>
                <button onClick={handleGridClick}>
                  <BsFillGridFill />
                </button>
                <Link href={"/"}>Read More</Link>
              </div>
            </div>
            {isListActive && <PostCard cls="grid gap-5 py-4" clas='list-design'/>}
            {isGridActive && <PostCard cls="flex flex-wrap gap-3 w-full mt-4" clas='grid-design'/>}
          </div>
          <SideBar />
        </HomeComponents>
      </Layout>
    </>
  );
}
