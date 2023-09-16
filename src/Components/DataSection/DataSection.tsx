import React from 'react'
import styled from 'styled-components';

interface DataSectionElements {
    children?: React.ReactNode
}

const DataSectionFlex = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    padding-top: 48px;
`

export default function DataSection({children}: DataSectionElements) {
  return (
    <DataSectionFlex>
        {children}
    </DataSectionFlex>
  )
}
