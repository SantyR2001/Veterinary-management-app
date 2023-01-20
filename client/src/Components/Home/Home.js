import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/nav";
import Container from "./container";

function Home(props) {
  return (
    <div className="h-100">
      <Nav />
      <Container />
      <Footer />
    </div>
  );
}

export default Home;
