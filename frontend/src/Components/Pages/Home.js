import React, { useEffect } from "react";
// import Drop from "../Admin/Drop";
import styled from "styled-components";

const HomePage = styled.div`
  height: 100%;
  width: 100%;
`;

function Home() {
  return (
    <HomePage>
      <section className='home-header'>
        <h2 className='title'>
          Creating special memories with sweet delicacies!
        </h2>
        <div className='carousel-container'>
          <section className='cake-carousel'>{/* <CakeCarousel /> */}</section>
        </div>
      </section>
      <section className='home-body'>{/* <Drop /> */}</section>
    </HomePage>
  );
}

export default Home;
