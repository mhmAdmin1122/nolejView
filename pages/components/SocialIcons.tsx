import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

const SocialIcons = ({clas}:any) => {
  return (
    <div className={clas}>
      <Link
        href={"https://www.facebook.com/NolijView?_rdc=1&_rdr"}
        target="_blank"
        className="FB"
      >
        <FaFacebook />
      </Link>

      <Link
        href={"https://www.youtube.com/channel/UCjVoJypylxdToYxXXIy5-Bg"}
        target="_blank"
        className="YT"
      >
        <FaYoutube />
      </Link>

      <Link
        href={
          "https://www.pinterest.com/NViewEducater/?invite_code=331304daa7b845e98b169baade4a600e&sender=985655205855057484"
        }
        target="_blank"
        className="PR"
      >
        <FaPinterest />
      </Link>

      <Link href={"https://www.instagram.com/nview362/"} target="_blank" className="INSTA">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialIcons;
