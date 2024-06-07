/* eslint-disable react/no-unescaped-entities */
import { Cards } from "@/components/Cards/Cards";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import React from "react";

export default function About() {
  return (
    <Container className="flex flex-col h-full justify-around gap-y-14">
      <Title name="About Me" />
      <div>
        <h3 className="text-justify">
          I am a Junior Frontend Web Developer skilled in using HTML, CSS, and
          JavaScript to create responsive and user-friendly interfaces. I also
          have experience with frameworks like React.js And Next.Js. If you'd
          like to learn more, feel free to reach out!
        </h3>
      </div>
      <div>
        <h2>What I Do</h2>
      </div>
      <div className="flex justify-around flex-wrap gap-y-10 w-full mb-6">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </Container>
  );
}
