const Skills = () => {
  const skills = [
    {
      title: "Languages",
      languages: ["Java", "JavaScript", "TypeScript"],
    },
    { title: "Databases", languages: ["MySQL",  "MongoDB"] },
    {
      title: "Tools",
      languages: [
        "VSCode",
        "Intlij",
        "Linux",
        "Figma",
        "Git",
        
      ],
    },
    {
      title: "Other",
      languages: ["HTML", "CSS", "EJS", "SCSS","React","Node.js"],
    },
    {
      title: "Frameworks",
      languages: [
        "React Native",
        "Material UI",
        "Tailwindcss",
        "Spring Boot",
        "Express.js",
        "Next.js",
      ],
    },
  ];
  return (
    <>
    <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
      {/* top */}
      <div data-aos = "fade-left" className=" mb-10">
        <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
          <div className="">
            <span className="text-[#7FFF00]">#</span>skills
          </div>
          <div className="line w-1/3 h-px bg-[#7FFF00]"></div>
        </div>
      </div>
      {/* bottom */}
      <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
        {/* left */}
        <div  data-aos = "fade-right" className="mx-auto">
          <img className=" w-full mx-auto" src={require("../../assets/shapes.png")} alt="" />
        </div>
        {/* right & mapping */}
        <div  data-aos = "fade-left" className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4">
          {skills.map(({ title, languages }) => {
            return (
              <>
                <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                  <div className=" p-2">
                    <h2 className=" font-semibold">{title}</h2>
                  </div>
                  <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                    {languages.map((e) => {
                      return <span>{e}</span>;
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  </>
  );
};

export default Skills;
