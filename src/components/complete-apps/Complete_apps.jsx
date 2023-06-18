import React from 'react'
// imgs
import first from "Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";
import forth from "./imgs/Rectangle 22 (11).png";
import fifth from "./imgs/Rectangle 22.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [
        // 6 projects date
        {
            // get img from img folder
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
        {
            img: forth,
            langs: ["html", "css", "javascript"],
            title: "Kotik Bot",
            disc: "Discord anti-crash bot ",
        },
        {
            img: fifth,
            langs: ["html", "TS", "Vue", "Node.js", "Less"],
            title: "Portfolio",
            disc: "You’re using it rn ",
        },
        {
            img: forth,
            langs: ["html", "css", "javascript"],
            title: "Kotik Bot",
            disc: "Discord anti-crash bot ",
        },
    ];
    return (
        <div>
            
        </div>
    )
}

export default Complete_apps