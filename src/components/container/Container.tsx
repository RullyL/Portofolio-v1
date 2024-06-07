import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`w-[100%] p-4 bg-[#CDE8E5] rounded-lg px-4 ${className}`}>{children}</div>;
};

export default Container;
