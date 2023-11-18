import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="subNav">
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/"}>
          <li>About Us</li>
        </Link>
        <Link href={"/"}>
          <li>Contact Us</li>
        </Link>
      </ul>
      <div>
        <Link
          href={"https://www.facebook.com/NolijView?_rdc=1&_rdr"}
          target="_blank"
        >
          <FaFacebook />
        </Link>

        <Link
          href={"https://www.youtube.com/channel/UCjVoJypylxdToYxXXIy5-Bg"}
          target="_blank"
        >
          <FaYoutube />
        </Link>

        <Link
          href={
            "https://www.pinterest.com/NViewEducater/?invite_code=331304daa7b845e98b169baade4a600e&sender=985655205855057484"
          }
          target="_blank"
        >
          <FaPinterest />
        </Link>

        <Link href={"https://www.instagram.com/nview362/"} target="_blank">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SubNavbar;
