import React from 'react'
// imgs
import first from "../../assets/project1.png";
import second from "../../assets/project2.png";
import third from "./../../assets/project3.png";
import forth from "./../../assets/project5.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [
        {
            // get img from img folder
            img: first,
            langs: ["html", "css", "javascript", "react", "tailwind css"],
            title: "Tracker.jobs",
            disc: "Traking Jobs ",
        },
        {
            img: second,
            langs: ["html", "css", "javascript"],
            title: "Simple portfolio",
            disc: "Portfolio  ",
        },
        {
            img: third,
            langs: ["html", "css", "javascript","java" ,"SpringBoot"],
            title: "Easy Car Rental",
            disc: "Get Rent your Car ",
        },
        {
            img: forth,
            langs: ["html", "css", "javascript","Reactjs","Tailwindcss"],
            title: "Googel UI",
            disc: "UI",
        },
      
    ];
    return (
        <div>
        <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
            {/* top / title */}
            <div className="">
                {/* projects */}
                <div className=" text-white font-bold text-[32px]">
                    <span className=" text-[#7FFF00]">/</span>
                    <span>projects</span>
                </div>
                {/* list */}
                <div className=" text-white mt-[14px]">List of my projects</div>
            </div>
            {/* completed tasks */}
            <div className="">
                {/* title */}
                <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                    <span className=" text-[#7FFF00]">#</span>
                    <span>complete-apps</span>
                </div>
                {/* projects */}
                <div className="flex flex-wrap justify-start  gap-4 my-12">
                    {/* cards */}
                    {projects.map(({ img, langs, title, disc }) => {
                        return (
                            <>
                                <Project_card
                                    img={img}
                                    langs={langs}
                                    title={title}
                                    disc={disc}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Complete_apps