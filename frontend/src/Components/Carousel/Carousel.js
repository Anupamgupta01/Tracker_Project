import React from "react";
import styles from "./carousel.module.css";
import img from "./../Images/user.png";
import img1 from "./../Images/Ngo.png";
import img2 from "./../Images/Admin.png";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  text-align: center;
  position: absolute;
  bottom: 40%;
  width: 10%;
  font-size: 1em;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const CarouselUI = ({ position, handleClick, children, total }) => {
  return (
    <div className={styles.comp}>
      <div className={styles.child}>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          {"<"}
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          {">"}
        </Arrow>
      </div>

      <div className={styles.dot}>
        {Array(...Array(total)).map((val, index) => (
          <div
            className={styles.dot2}
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            {index === position ? "● " : "○ "}
          </div>
        ))}
      </div>
    </div>
  );
};
const Carousel1 = makeCarousel(CarouselUI);

const Carousel = () => {
  return (
    <div className={styles.full}>
      <Carousel1
        swipe={true}
        maxTurns={0}
        defaultWait={2000} /*wait for 1000 milliseconds*/
      >
        <Slide right>
          <div>
            <img src={img2} alt="Admin" className={styles.img} />
            <p>
              Admin will be governor of the whole process. They can add new
              factories and NGOs and take actions on complaints.
            </p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={img1} alt="Ngo" className={styles.img} />
            <p>
              NGOs can register remotely and then login to take active part in
              whole process.{" "}
            </p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={img} alt="User" className={styles.img} />

            <p>
              User can file complaints along with its proof and track the
              actions taken on your complaint.
            </p>
          </div>
        </Slide>
      </Carousel1>
    </div>
  );
};

export default Carousel;
