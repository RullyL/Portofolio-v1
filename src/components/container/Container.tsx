import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-full p-5 rounded-lg bg-[#CDE8E5] dark:bg-[#1e293b] transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
