import Link from 'next/link'
import React from 'react'

const BreadCrumbs = ({crumbs_title, URL}:any) => {
  return (
    <div className='flex items-center justify-between bg-[#fff] border-l-[5px] border-[#a73263] p-[8px] rounded-sm'>
      <b>{`${crumbs_title}`}</b>
      <Link href={`${URL}`}>Read More</Link>
    </div>
  )
}

export default BreadCrumbs
