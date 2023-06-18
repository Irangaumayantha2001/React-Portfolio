import React from 'react'

const Small_projects = () => {
   
    let projects = [
        {
            languages: ["Html", "CSS", "javascript","Boostrap"],
            title: "pos",
            body: 'point of sale'
        },
        {
            languages: ["java", "Javafx", "MySQL"],
            title: "Hostel-Reservation",
            body: 'Reservation in Hostel'
        },
        {
            languages: ["Html", "Css", "javascript"],
            title: "Shooting game",
            body: 'shooting Game'
        },
        {
            languages: ["Figma"],
            title: "Gaming store app",
            body: 'Front-end design in figma'
        },
      
    ]
    
    return (
        <div className=' pt-[80px] px-5 max-w-[1560px] mx-auto'>
        {/* title */}
        <div className="">
            <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                <span className=" text-[#7FFF00]">#</span>
                <span>small-projects</span>
            </div>
        </div>
        {/* body/cards */}
        <div className="cards flex justify-center flex-wrap gap-4">
            {
                // mapping
                projects.map(e => {
                    let { languages, title, body } = e
                    return <>
                        {/* card */}
                        <div className="card max-w-[331px] w-full border border-[#ABB2BF]">
                            {/* skills */}
                            <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                                {languages.map(lang => {
                                    return <span>{lang} </span>
                                })}
                            </div>
                            {/* discription */}
                            <div className="disc p-4">
                                <h2 className=' text-white font-medium text-2xl'>{title}</h2>
                                <p className=' text-[#ABB2BF] py-4'>{body}</p>
                                {/* we are only coders so maybe no one have figma projects */}
                                <button className=' border border-[#7FFF00] px-4 py-2 text-white duration-150 hover:bg-[#7FFF00]'>
                                    <a href="www.github.com">Github {'<'}~{'>'}</a>
                                </button>
                            </div>
                        </div></>
                })
            }
        </div>
    </div>
    )
}

export default Small_projects