import ContactForm from "@/pages/components/ContactForm";
import Footer from "@/pages/components/Footer";
import MapDirecction from "@/pages/components/Home Page/MapDirecction";
import Navbar from "@/pages/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <div className="mt-2 contact-page">
        <h1>Contact Us</h1>
        <div className="form-and-Other_Contacts flex justify-center gap-6 flex-wrap">
          <ContactForm />
          <div className="other_Contact_info">
            <div className="map px-[25px]">
              <MapDirecction />
            </div>
            <div className="email_phone px-[25px]">
              <div className="email flex items-center">
                <b>
                  <FaEnvelope />
                </b>
                <Link href={"mailto:hasaanad12min@gmail.com"}>Support</Link>
              </div>
              <div className="phone">
                <b>
                  <FaPhoneVolume />
                </b>
                <Link href={"tel:+923257390045"}>+92 325 739 0045</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
