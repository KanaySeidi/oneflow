import React from "react";
import Intro from "../components/Intro";
import VideoPlayer from "../components/VideoPLayer";
import Frame from "../components/Frame";
import Carousel from "../components/Carusel";
>

function HomePage() {
  return (
    <>
      <Intro />
      <VideoPlayer/>
      <Frame />
      <Carousel />

    </>
  );
}

export default HomePage;
