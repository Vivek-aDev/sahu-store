import React from "react";
import { HeroSection } from "../components/HeroSection";

export const About = () => {
  const data = {
    name: "Vivek Ecommerce",
  };
  return <HeroSection myData={data} />;
};
