import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { Trusted } from "../components/Trusted";

export const Home = () => {
  const data = {
    name: "Sahu Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};
