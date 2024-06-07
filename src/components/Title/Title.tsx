import React from "react";
import Line from "../Line/Line";

interface TitleProps {
  name: any;
}

export default function Title({ name }: TitleProps) {
  return (
    <>
      <div className="flex gap-4 items-center rounded-md">
        <h1>{name}</h1> <Line />
      </div>
    </>
  );
}
