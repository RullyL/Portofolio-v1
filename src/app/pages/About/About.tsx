/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Cards } from "@/components/Cards/Cards";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";

export default function About() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const [cardData, setCardData] = useState([
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
  ]);
  const [showAll, setShowAll] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setVisible((prev) => [true, false, false, false]), 500),
      setTimeout(() => setVisible((prev) => [true, true, false, false]), 800),
      setTimeout(() => setVisible((prev) => [true, true, true, false]), 1500),
      setTimeout(() => setVisible((prev) => [true, true, true, true]), 2000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowLoadMore(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleCollapse = () => {
    setShowAll(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container className="flex flex-col h-full justify-around gap-y-14">
      <Title name="About Me" />
      <div
        className={`transition-opacity duration-1000 ${
          visible[1] ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-justify md:text-[20px] text-[14px]">
          I am a Junior Frontend Web Developer specializing in creating
          responsive and user-friendly interfaces. With a strong proficiency in
          frameworks like React.js and Next.js, I have successfully applied
          these technologies to build impactful projects. My experience includes
          developing real-world applications that enhance user experience and
          functionality. If you'd like to learn more about my work or discuss
          potential collaborations, feel free to reach out!
        </h3>
      </div>
      <div
        className={`transition-opacity duration-1000 ${
          visible[2] ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2>What I Do</h2>
      </div>
      <div className={`flex justify-around flex-wrap gap-y-10 w-full `}>
        {cardData.map(
          (card, index) =>
            (showAll || index < 2) && (
              <div
                key={card.id}
                className={`transition-opacity duration-1000 ${
                  visible[3] ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Cards />
              </div>
            )
        )}
      </div>
      {!showAll && cardData.length > 2 && (
        <button
          onClick={handleLoadMore}
          className={`transition-opacity duration-1000 ${
            visible[3] ? "opacity-100" : "opacity-0"
          } bg-[#7AB2B2] text-white py-2 px-4 rounded-lg`}
          style={{ transitionDelay: `${(cardData.length - 1) * 200}ms` }}
        >
          Load More
        </button>
      )}
      {showAll && (
        <button
          onClick={handleCollapse}
          className="bg-[#7AB2B2] text-white py-2 px-4 rounded-lg"
        >
          Collapse
        </button>
      )}
    </Container>
  );
}
