import Footer from "@/pages/components/Footer";
import Layout from "@/pages/components/Layout";
import Navbar from "@/pages/components/Navbar";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Layout>
        <div className="aboutUs-Box">
          <h1>About Us:</h1>
          <p>
            To create a world where every person can achieve their full
            potential based on their verified skills, Nolej View helps
            organizations make better decisions based on trusted information
            about what people know and can do. Nolej View is a site where you
            learn your languages for improving your coding skills or
            C-Languages.
          </p>
          <h1>Story of Nolej View:</h1>
          <p>
            Nolej View was created to teach and explain computer languages ​​to
            our online users. Our mission is simply to teach our users the best
            computer languages. Our organization was created in 2018. And this
            institution of ours started teaching, learning, and improving the
            skill of users and students online through our website in 2022. And
            now our organization helps poor students in the city where that
            organization was founded. Our main mission is to build an
            educational & digital education environment in the world and in
            Pakistan.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default About;
