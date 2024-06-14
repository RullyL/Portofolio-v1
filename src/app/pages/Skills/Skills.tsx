import { Carousel } from "antd";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import React, { useState, useEffect } from "react";
import { SkillCard } from "@/components/Cards/Cards";

export default function Skills() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    const textTimeout = setTimeout(() => {
      setTextVisible(true);
    }, 800);

    const cardsTimeout = setTimeout(() => {
      setCardsVisible(true);
    }, 1200);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(textTimeout);
      clearTimeout(cardsTimeout);
    };
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "REACT.JS",
    "TypeScript",
    "Tailwind",
    "ANTD",
    "Node.js",
    "GitHub",
    "FIGMA",
    "REST.API",
    "Trello",
    "MongoDb",
  ];

  return (
    <Container className="flex flex-col gap-y-12">
      <Title name="Skills" />
      <div
        className={`transition-opacity duration-1000 ${
          textVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-center">My Skills</h2>
      </div>
      <div
        className={`px-4 sm:px-16 transition-opacity duration-1000 ${
          cardsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="lg:hidden m-auto">
          <Carousel
            autoplay
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            draggable={true}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill} />
            ))}
          </Carousel>
        </div>
        <div className="hidden lg:flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                cardsVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <SkillCard name={skill} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
