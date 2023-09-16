import React from 'react'
import styled from 'styled-components';

const BannerTitle = styled.h1`
    font-size: 120px;
    max-width: 1060px;
    letter-spacing: 2px;
    line-height: 144px;
    color: white;
`

const BannerContainer = styled.div`
    position: absolute;
    left: 0;
    z-index: 1000;
    margin-top: 132px;
`

const BannerText = styled.p`
    color: white;
    font-size: 16px;
    max-width: 421px;
    margin-top: 45px;
    margin-bottom: 60px;
    line-height: 19.2px;
`

export default function BannerDescription() {
  return (
    <BannerContainer>
        <BannerTitle>Explore Your own planet In our New metaverse</BannerTitle>
        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </BannerText>
    </BannerContainer>
  )
}
