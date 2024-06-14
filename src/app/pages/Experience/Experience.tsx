/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Cards } from "@/components/Cards/Cards";
import Title from "@/components/Title/Title";
import Container from "@/components/container/Container";
import Link from "next/link";

export default function Experience() {
  const [visible, setVisible] = useState([false, false, false, false]);
  const [showAll, setShowAll] = useState(false);
  const [cardData, setCardData] = useState([
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
  ]);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setVisible((prev) => [true, false, false, false]), 500),
      setTimeout(() => setVisible((prev) => [true, true, false, false]), 800),
      setTimeout(() => setVisible((prev) => [true, true, true, false]), 1200),
      setTimeout(() => setVisible((prev) => [true, true, true, true]), 1600),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);
  const handleLoadMore = () => {
    setShowAll(true);
  };
  const handleCollapse = () => {
    setShowAll(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container className="flex flex-col gap-y-12 h-auto lg:h-[100%]">
        <Title name="Experience" />
        <div
          className={`transition-opacity duration-1000 ${
            visible[1] ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-xl lg:text-2xl">My Experience</h2>
        </div>
        <div
          className={`transition-opacity duration-1000 ${
            visible[2] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h3 className="text-lg lg:text-2xl">
              - Graduate Of SMK Yadika Soreang, Software Engineering
            </h3>
            <h3 className="text-lg lg:text-2xl hover:text-blue-300">
              <Link href="https://nusantech.com/">
                - Internship At PT Nusantech
              </Link>
            </h3>
          </div>
        </div>
        <div
          className={`flex flex-col gap-10 transition-opacity duration-1000 ${
            visible[3] ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2>What I Made</h2>
          <div className="flex flex-wrap gap-y-6 gap-x-1 justify-evenly mb-6">
            {cardData
              .slice(0, showAll ? cardData.length : 2)
              .map((card, index) => (
                <div
                  key={card.id}
                  className={`transition-opacity duration-1000 ${
                    visible[3] ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    transitionProperty: "opacity",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Cards />
                </div>
              ))}
          </div>
          {!showAll && cardData.length > 4 && (
            <button
              onClick={handleLoadMore}
              className={`bg-[#7AB2B2] text-white py-2 px-4 rounded-lg transition-opacity duration-300 ${
                visible[3] ? "opacity-100" : "opacity-0"
              } hover:opacity-80`}
            >
              Load More
            </button>
          )}
          {showAll && (
            <button
              onClick={handleCollapse}
              className={`bg-[#7AB2B2] text-white py-2 px-4 rounded-lg mt-4 transition-opacity duration-300 ${
                visible[3] ? "opacity-100" : "opacity-0"
              } hover:opacity-80`}
            >
              Collapse
            </button>
          )}
        </div>
      </Container>
    </>
  );
}
