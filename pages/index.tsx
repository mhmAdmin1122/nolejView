import Head from "next/head";
import Layout from "./components/Layout";
import PostCard from "./components/Home Page/PostCard";
import Slider from "./components/Home Page/Slider";
import HomeComponents from "./components/Home Page/HomeComponents";
import BreadCrumbs from "./components/BreadCrumbs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolej View</title>
      </Head>
      <Layout>
        <HomeComponents>
          <div className="w-[75%] p-[24px]">
            <BreadCrumbs crumbs_title="All Posts" URL="/" />
            <PostCard />
          </div>
          <Slider />
        </HomeComponents>
      </Layout>
    </>
  );
}
