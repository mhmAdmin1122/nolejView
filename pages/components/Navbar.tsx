import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo.png";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  return (
    <div className="headers">
      <nav className="navbar">
        <div className="logo_tabs">
          <Image src={logo} alt="logo" className="logo" />
          <ul className="tabs">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>Languages</li>
            </Link>
            <Link href="/">
              <li>About</li>
            </Link>
            <Link href="/">
              <li>Disclaimer</li>
            </Link>
            <Link href="/">
              <li>Code Editor</li>
            </Link>
          </ul>
        </div>
        <div className="Search_ico">
          <FaSearch />
        </div>
      </nav>
      <SubNavbar />
    </div>
  );
};

export default Navbar;
