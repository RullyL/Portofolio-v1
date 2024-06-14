import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`w-[100%] p-5 bg-[#CDE8E5] rounded-lg ${className}`}>{children}</div>;
};

export default Container;
