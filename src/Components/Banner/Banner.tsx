import React from 'react'
import styled from 'styled-components';

interface BannerProps {
    children?: React.ReactNode
}

const AppBanner = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default function Banner({children}: BannerProps) {
  return (
    <AppBanner>{children}</AppBanner>
  )
}
