import Project_card from "../project_card/Project_card";
import first from "./imgs/Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "ChertNodes",
      disc: "Minecraft servers hosting ",
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Node.js"],
      title: "ProtectX",
      disc: "Discord anti-crash bot ",
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "Node.js", "python"],
      title: "Kahoot Answers Viewer",
      disc: "Get answers to your kahoot quiz ",
    },
  ];

  return (
    <div></div>
  );
};

export default Projects;
