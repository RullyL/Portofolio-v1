import { Cards } from "@/components/Cards/Cards";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import React from "react";

export default function Experience() {
  const exp = [
    { experience: "Graduate Of SMK Yadika Soreang, Software Engineering" },
    { experience: "Internship At PT Nusantech" },
  ];

  return (
    <>
      <Container className="flex flex-col gap-y-12 h-auto lg:h-[100%]">
        <Title name="Experience" />
        <h2 className="text-xl lg:text-2xl">My Experience</h2>
        <div>
          {exp.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg lg:text-2xl">- {item.experience}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-xl lg:text-2xl">Which I Made</h2>
          <div className="flex flex-wrap gap-y-6 gap-x-4 justify-evenly mb-6">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </Container>
    </>
  );
}
