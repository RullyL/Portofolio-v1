import Container from "@/components/container/Container";
import React, { useState, useEffect, useRef } from "react";
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
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [titles]);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { bottom } = ref.current.getBoundingClientRect();
        setIsSticky(bottom <= 0 && window.innerWidth <= 767);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const cpPerson = [
    { title: "Phone", content: "+62 898 6081 372" },
    { title: "Email", content: "example@email.com" },
    { title: "Address", content: "Indonesian, West Java" },
    {
      title: "My CV",
      content: (
        <a href="/CV_Rully_Lukmansyah.pdf" download className="underline">
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
        className="z-[1] w-[140px] hover:scale-[1.1] duration-1000 lg:w-[175px] h-[140px] lg:h-[175px] absolute rounded-2xl top-[-90px] left-[50%] transform -translate-x-[50%]"
        style={{
          backgroundImage: "url('/me.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        ref={ref}
        className={`flex flex-col items-center justify-center transition-colors duration-300 ${
          isSticky
            ? "sticky top-0 bg-white dark:bg-slate-900 py-4 shadow-md z-10"
            : ""
        }`}
      >
        <p className="text-black dark:dark:text-white text-black">Rully Lukmansyah</p>

        <div className="w-[60%] bg-[#7AB2B2] dark:bg-[#334155] dark:text-white text-black rounded-lg py-2 flex justify-center transition-colors duration-300">
          <h3 className="text-[15px]">{titles[currentTitleIndex]}</h3>
        </div>

        <div className="flex gap-4 px-4 flex-wrap my-4">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:bg-slate-700 hover:shadow-lg hover:shadow-gray-600 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#7AB2B2] dark:bg-[#334155] dark:text-white text-black"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="lg:hidden mb-5 bg-[#7AB2B2] dark:bg-[#334155] dark:text-white text-black py-2 px-4 rounded-lg mt-4 transition-colors duration-300"
        >
          {showDetails ? "Tutup" : "Selengkapnya"}
        </button>

        <div
          className={`bg-[#7AB2B2] dark:bg-[#334155] dark:text-white text-black w-[90%] mb-6 rounded-xl overflow-hidden transition-all duration-700 ${
            showDetails ? "max-h-[500px]" : "max-h-0"
          } lg:max-h-[300px] lg:mb-6`}
        >
          {cpPerson.map((item, index) => (
            <div
              key={index}
              className="border border-b-2 border-t-0 border-l-0 border-r-0 my-4 px-[15%]"
            >
              <h4 className="dark:text-white text-black">{item.title}</h4>
              <h3 className="text-[15px] dark:text-white text-black">{item.content}</h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
