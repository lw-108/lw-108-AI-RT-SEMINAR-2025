import React from "react";
import { StickyCard002 } from "./ui/skiper-ui/skiper17";

const CustomDemo = () => {
  const customCards = [
    {
      id: "project-1",
      image: "https://i.ibb.co/jktdKyBT/shadcn.png",
      alt: "Project 1",
      link: "https://yourwebsite.com/project-1",
    },
    {
      id: "project-2",
      image: "/images/projects/project2.jpg",
      alt: "Project 2",
      link: "https://yourwebsite.com/project-2",
    },
    {
      id: "project-3",
      image: "/images/projects/project3.jpg",
      alt: "Project 3",
      link: "https://yourwebsite.com/project-3",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <StickyCard002
        cards={customCards}
        className="bg-gradient-to-br from-gray-900 to-black"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </div>
  );
};

export default CustomDemo;
