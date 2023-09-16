import React from 'react'
import styled from 'styled-components';

const StatsTitle = styled.h2`
    font-size: 32px;
    margin-bottom: 42px;
    color: white;
`

const StatsContainer = styled.div`
    margin-top: 125px;
    text-align: center;
    margin-left: 118px;
`

const StatsListElements = styled.li`
    border-bottom: 0.5px solid #D2C4C4;
    text-align: center;
    padding: 8px 45px;
`

const StatsListElementsQuantity = styled.p`
    margin-bottom: 12px;
    color: #E75626;
    font-size: 28px;
`

const StatsListElementsQuantityDescription = styled.p`
    color: white;
    font-size: 18px;
`

export default function Stats() {
  return (
    <StatsContainer>
        <StatsTitle>ROADMAP STATS</StatsTitle>
        <ul>
            <StatsListElements>
                <StatsListElementsQuantity>12, 345</StatsListElementsQuantity>
                <StatsListElementsQuantityDescription>Lorem ipsum dolor</StatsListElementsQuantityDescription>
            </StatsListElements>
            <StatsListElements>
                <StatsListElementsQuantity>12, 345</StatsListElementsQuantity>
                <StatsListElementsQuantityDescription>Lorem ipsum dolor</StatsListElementsQuantityDescription>
            </StatsListElements>
            <StatsListElements>
                <StatsListElementsQuantity>12, 345</StatsListElementsQuantity>
                <StatsListElementsQuantityDescription>Lorem ipsum dolor</StatsListElementsQuantityDescription>
            </StatsListElements>
        </ul>
    </StatsContainer>
  )
}
