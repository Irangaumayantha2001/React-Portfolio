import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Iranga is a <span className="text-[#7FFF00]">web designer</span> and{" "}
            <span className="text-[#7FFF00]">front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#7FFF00] hover:bg-[#7FFF00]">
            Contact me!!
          </button>
        </div>
        <div  data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <img src={require("../../assets/man1.png")} alt="man1" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#7FFF00]"></div>
            <div className="">
              Currently Learn on <span className="text-white">Frontend Framework</span>
            </div>
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={require("../../assets/quote.png")} alt="quote" />
      </div>
    </>
  );
};

export default About;
