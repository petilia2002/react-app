import React, { useState } from "react";
import { Navbar, Hero, Grid, CreateAd } from "../components";

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
      <Navbar openModal={openModal} />
      <Hero />
      <Grid />
      <CreateAd isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default Main;
