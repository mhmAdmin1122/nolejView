import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer>
      <div className="about_Company">
        <div className="Image_Box w-[150px] h-[125px]">
          <Image src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="title_description">
          <h1 className="footer-about-title">
            WHAT YOU CAN GET FROM HERE?
          </h1>
          <p className="footer-desc">
            This site helps you for learning digital and computer code
            languages, skill improvement education & some computer management
            info.
          </p>
        </div>
      </div>
      <SocialIcons clas="social-icons" />
    </footer>
  );
};

export default Footer;
