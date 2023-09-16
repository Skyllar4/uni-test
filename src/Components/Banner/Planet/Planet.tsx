import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

const PlanetContainer = styled.div`
    background-image: url('/images/backgroundPlanet.svg');
    background-size: contain;
    display: flex;
    position: relative;
`

const BannerPlanet = styled.img`
    width: 320px;
    height: 320px;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    margin-top: -160px;
`

const BackgroundPlanet = styled.img`
    width: 446px;
    height: 446px;
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -223px;
    margin-top: -223px;
`

const FirstPlanetRing = styled.img`
    width: 384px;
    height: 384px;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -192px;
    margin-top: -192px;
`

const SecondPlanetRing = styled.img`
    width: 370px;
    height: 370px;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -185px;
    margin-top: -185px;
`

const renderingOrangeLine = keyframes`
    to {
        stroke-dashoffset: 1;
    }
`

const Svg = styled.svg`
    z-index: 10;
    height: 100vh;
    position: absolute;
    left: 50%;
    margin-top: 19px;
`
// отппозиционировать svg по другому

const OrangeIndicator = styled.path`
    stroke-dasharray: -1;
    stroke-dashoffset: 0;
    & {
        animation: ${renderingOrangeLine} 5s forwards infinite;
    } 
`

export default function Planet() {

    const draw = {
        hidden: { pathLength: 0, opacity: 0, },
        visible: (i: number) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 4.0, bounce: 0 },
              opacity: { delay, duration: 0.01 },
            }
          };
        }
      };

  return (
    <PlanetContainer>
        <BannerPlanet src="/images/planet.svg" alt="planet" />
        <BackgroundPlanet src="/images/secondBackPlanet.svg" alt="" />
        <FirstPlanetRing src='/images/firstElipsePlanet.svg' alt="" />
        <SecondPlanetRing src='/images/secondElipsePlanet.svg' alt="" />
        <motion.svg
            className={'orangeLine'}
            width="500"
            height="500"
            z-index="10"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
        >
        <motion.circle
            cx="300"
            cy="300"
            r="290"
            stroke="#E75626"
            fill="transparent"
            variants={draw}
        />
        <motion.circle
            cx="10"
            cy="300"
            r="5"
            fill="#E75626"
            variants={draw}
        />
        <motion.circle
            cx="300"
            cy="10"
            r="5"
            fill="#E75626"
            variants={draw}
        />
        <motion.circle
            cx="300"
            cy="590"
            r="5"
            fill="#E75626"
            variants={draw}
        />
        </motion.svg>
        {/* <Svg>
            <OrangeIndicator d="M0 487C134.205 487 243 378.205 243 244C243 109.795 134.205 1 0 1" pathLength="1" fill="transparent" stroke="#E75626" stroke-width="0.5" />
        </Svg> */}
        {/* <OrangeIndicator src='/images/orangeLine.svg' alt="" /> */}
    </PlanetContainer>
  )
}
