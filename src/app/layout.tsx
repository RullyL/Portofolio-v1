'use client'

import { useEffect, useState } from 'react';
import "./globals.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Person from "./layout/Person/Person";
import About from "./pages/About/About"; 
import Experience from "./pages/Experience/Experience"; 
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState('About');


  useEffect(() => {
    const handleContextMenu = (e: { preventDefault: () => any; }) => e.preventDefault();
    const handleKeyDown = (e: { ctrlKey: any; key: string; preventDefault: () => void; }) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i' || e.key === 'j')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'EXP':
        return <Experience />;
      case 'Contact':
        return <Contact />;
      case 'Skills':
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <html lang="en">
      <body className="root-layout">
        <div className='person-container'>
          <Person />
        </div>
        <div className='content-container'>
          {renderPage()}
        </div>
        <div className="sidebar-container">
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>
      </body>
    </html>
  );
}
