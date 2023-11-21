import React from "react";
import { MdDirectionsBike } from "react-icons/md";

const MapDirecction = () => {
  return (
    <div className="grid gap-2 w-[100%]">
      <div className="mt-2 flex flex-wrap justify-between items-center py-2 px-4 bg-blue-500 rounded-sm text-[#fff] cursor-context-menu">
        <b className="text-2xl font-bold"><MdDirectionsBike /></b>
        <b>Used our direction</b>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13906.272710717109!2d71.655469!3d29.38293055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700401754568!5m2!1sen!2s"
        width="100%"
        height="220px"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default MapDirecction;
