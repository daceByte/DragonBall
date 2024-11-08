import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ContainerCards from "../components/ContainerCards";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <ResponsiveAppBar />
        <ContainerCards />
      </div>
    </>
  );
}

export default Home;
