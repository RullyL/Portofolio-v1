import { Carousel } from "antd";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import React from "react";
import { SkillCard } from "@/components/Cards/Cards";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "REACT.JS",'TypeScript','Tailwind','ANTD', "Node.js",'GitHub',"FIGMA","REST.API",'Trello','MongoDb'];

  return (
    <Container className="flex flex-col gap-y-12">
      <Title name="Skills" />
      <h2 className="text-center">My Skills</h2>
      <div className="px-4 sm:px-16">
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
            <SkillCard key={index} name={skill} />
          ))}
        </div>
      </div>
    </Container>
  );
}
