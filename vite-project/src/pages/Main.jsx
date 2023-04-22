import React, { useState } from "react";
import { Navbar2, Hero, Grid } from "../components";
import CreateAd from "../components/CreateAd";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Navbar2 openModal={openModal} />
      <Hero />
      <Grid />
      <CreateAd isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default Main;
