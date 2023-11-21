import React from "react";
import { PiSpeakerHighFill } from "react-icons/pi";

const AdsSlider = () => {
  return (
    <div className="ads_conatiner">
      <div className="adsTitle mt-2 flex flex-wrap justify-between items-center py-2 px-4 bg-blue-500 rounded-sm text-[#fff] cursor-context-menu">
        <b>
          <PiSpeakerHighFill />
        </b>
        <b>ADS</b>
      </div>
      <div className="sliderBox">
        <li>ADS</li>
        <li>ADS</li>
        <li>ADS</li>
      </div>
    </div>
  );
};

export default AdsSlider;
