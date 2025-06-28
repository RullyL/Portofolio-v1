/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Cards } from "@/components/Cards/Cards";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";

export default function About() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const [cardData, setCardData] = useState([
    { id: 1, title: "Frontend Dev" },
    { id: 2, title: "Next.js Projects" },
    { id: 3, title: "Responsive Design" },
    { id: 4, title: "React Integration" },
    { id: 5, title: "API Consumption" },
    { id: 6, title: "UI Optimization" },
  ]);
  const [showAll, setShowAll] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setVisible([true, false, false, false]), 500),
      setTimeout(() => setVisible([true, true, false, false]), 800),
      setTimeout(() => setVisible([true, true, true, false]), 1500),
      setTimeout(() => setVisible([true, true, true, true]), 2000),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleResize = () => setShowLoadMore(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => setShowAll(true);
  const handleCollapse = () => {
    setShowAll(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container className="flex flex-col h-full justify-around gap-y-14">
      <Title name="About Me" />

      <div className={`transition-opacity duration-1000 ${visible[1] ? "opacity-100" : "opacity-0"}`}>
        <h3 className="text-justify md:text-[20px] text-[14px] text-black dark:text-white">
          I am a Junior Frontend Web Developer specializing in building responsive, user-friendly UIs using React.js and Next.js. I've developed real-world projects to enhance user experience. Interested in collaborating? Let's connect!
        </h3>
      </div>

      <div className={`transition-opacity duration-1000 ${visible[2] ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-black dark:text-white">What I Do</h2>
      </div>

      <div className="flex justify-around flex-wrap gap-y-10 w-full">
        {cardData.map((card, index) =>
          (showAll || index < 2) ? (
            <div
              key={card.id}
              className={`transition-opacity duration-1000 ${visible[3] ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Cards title={card.title} />
            </div>
          ) : null
        )}
      </div>

      {!showAll && cardData.length > 2 && (
        <button
          onClick={handleLoadMore}
          className={`transition-opacity duration-1000 ${
            visible[3] ? "opacity-100" : "opacity-0"
          } bg-[#7AB2B2] dark:bg-[#334155] text-white py-2 px-4 rounded-lg`}
          style={{ transitionDelay: `${(cardData.length - 1) * 200}ms` }}
        >
          Load More
        </button>
      )}

      {showAll && (
        <button
          onClick={handleCollapse}
          className="bg-[#7AB2B2] dark:bg-[#334155] text-white py-2 px-4 rounded-lg"
        >
          Collapse
        </button>
      )}
    </Container>
  );
}
