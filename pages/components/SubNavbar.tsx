import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const SubNavbar = () => {
  return (
    <div className="subNav">
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/page/about"}>
          <li>About Us</li>
        </Link>
        <Link href={"/page/contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
      <SocialIcons clas="social-icons-subnav"/>
    </div>
  );
};

export default SubNavbar;
