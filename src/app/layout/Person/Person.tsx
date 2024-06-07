"use client";

import Container from "@/components/container/Container";
import React, { useState, useEffect } from "react";
import styles from "./Person.module.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function Person() {
  const [titles, setTitles] = useState(["Web Developer", "Us Frontend Dev"]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles]);

  // Social Media
  const socialMedia = [
    {
      icon: <GithubOutlined style={{ fontSize: "24px" }} />,
      link: "https://github.com/RullyL",
    },
    {
      icon: <LinkedinOutlined style={{ fontSize: "24px" }} />,
      link: "https://www.linkedin.com/in/rully-lukmansyah-a648b1306/",
    },
    {
      icon: <WhatsAppOutlined style={{ fontSize: "24px" }} />,
      link: "https://wa.me/628986081372",
    },
  ];

  // Contact Person
  const cpPerson = [
    { title: "Phone", content: "+62 898 6081 372" },
    { title: "Email", content: "example@email.com" },
    { title: "Address", content: "Indonesian, West Java" },
    {
      title: "My CV",
      content: (
        <a
          href="/CV_Rully_Lukmansyah.pdf"
          download
          className="underline"
        >
          Download CV Here
        </a>
      ),
    },
  ];

  return (
    <Container
      className={`w-full relative pt-14 lg:pt-20 h-auto lg:h-[600px] ${styles.rotatingShadow}`}
    >
      <div
        className="z-[1] w-[140px] lg:w-[175px] h-[140px] lg:h-[175px] absolute rounded-2xl top-[-90px] left-[50%] transform -translate-x-[50%]"
        style={{
          backgroundImage: "url('/me.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col items-center justify-center">
        <p>Rully Lukmansyah</p>
        <div className="w-[60%] bg-[#7AB2B2] rounded-lg py-2 flex justify-center">
          <h3 className="title">{titles[currentTitleIndex]}</h3>
        </div>
        <div className="flex gap-4 px-4 flex-wrap my-4">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:bg-slate-700 hover:shadow-lg hover:shadow-gray-600 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#7AB2B2] text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="lg:hidden mb-5 bg-[#7AB2B2] text-white py-2 px-4 rounded-lg mt-4"
        >
          {showDetails ? "Tutup" : "Selengkapnya"}
        </button>
        <div
          className={`bg-[#7AB2B2] w-[90%] mb-6 rounded-xl py-[14px] h-auto lg:h-[300px] ${
            showDetails ? "block" : "hidden lg:block"
          }`}
        >
          {cpPerson.map((item, index) => (
            <div
              key={index}
              className="border border-b-2 border-t-0 border-l-0 border-r-0 my-4 px-[15%]"
            >
              <h4>{item.title}</h4>
              <h3>{item.content}</h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
