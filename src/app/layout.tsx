"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Person from "./layout/Person/Person";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState("About");
  const [fadeIn, setFadeIn] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Prevent inspect & right click
    const handleContextMenu = (e: { preventDefault: () => any }) =>
      e.preventDefault();
    const handleKeyDown = (e: {
      ctrlKey: any;
      key: string;
      preventDefault: () => void;
    }) => {
      if (e.ctrlKey && ["u", "s", "i", "j"].includes(e.key)) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Fade-in animation
    setFadeIn(true);
  }, []);

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 0);
  }, [currentPage]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "EXP":
        return <Experience />;
      case "Contact":
        return <Contact />;
      case "Skills":
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <html lang="en">
      <body className="root-layout">
        <div className="theme-toggle absolute top-4 right-4 z-50">
          <button onClick={toggleTheme} className="p-2 rounded">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="person-container">
          <Person />
        </div>
        <div className={`content-container ${fadeIn ? "fade-in" : ""}`}>
          {renderPage()}
        </div>
        <div className="sidebar-container">
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>
      </body>
    </html>
  );
}
