import React from 'react'

const Footer = () => {
  return (
    <>
    {/* line */}
    <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
    {/* footer */}
    <div data-aos = "fade-up" className="px-5 max-w-[1560px] mx-auto">
      {/* top */}
      <div className="flex justify-between gap-y-10 flex-wrap">
        {/* left */}
        <div className="mx-auto md:mx-0">
          <div className=" flex items-center gap-8 mb-3 ">
            {/* logo */}
            <div className=" flex gap-2 items-center text-2xl text-white font-bold">
              <img src={require("../../assets/Logo.png")} alt="" />
              <span>Iranga</span>
            </div>
            {/* email */}
            <span className="text-[#ABB2BF]">iamiranga10@gmail.com</span>
          </div>
          {/* disc */}
          <div className="text-[#ffffff]">
            <p>Web designer and front-end developer based in Sri Lanka</p>
          </div>
        </div>
        {/* right */}
        <div className=" mx-auto md:mx-0">
          {/* title */}
          <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
          {/* media */}
          <div className="flex items-center gap-2">
          
            <a href="https://www.figma.com/community/file/1252291033423737315">
              <img src={require("../../assets/Figma.png")} alt="" />
            </a>
            <a href="https://github.com/Irangaumayantha2001">
              <img src={require("../../assets/github.png")} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="text-center text-[#ABB2BF] pb-8 mt-12">
        © Copyright 2023. Made by Iranga
      </div>
    </div>
  </>
  )
}

export default Footer