import React from 'react'
import Slider from './Slider'
import MapDirecction from './MapDirecction'
import PopularCourse from './PopularCourse'
import AdsSlider from './AdsSlider'

const SideBar = () => {
  return (
    <div className='w-[25%] p-[10px] bg-[#fff] mt-5 rounded-md shadow-md shadow-gray-300 border-2 border-gray-100'>
      <Slider />
      <MapDirecction />
      <PopularCourse />
      <AdsSlider />
    </div>
  )
}

export default SideBar
