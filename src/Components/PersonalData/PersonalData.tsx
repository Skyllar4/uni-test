import React from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';

const ProfileTitle = styled.h2`
    color: white;
    font-size: 48px;
    margin-bottom: 48px;
`

const DataTitle = styled.h2`
    font-size: 24px;
    color: white;
    margin-bottom: 8px;
`

const DataText = styled.p`
    font-size: 32px;
    color: #E75626;
`

export default function PersonalData() {

    const {authUsername, authUserEmail, metaMaskKey} = useAppSelector(state => state.authReducer);

  return (
    <>
        <ProfileTitle>PERSONAL DATA</ProfileTitle>
        <ul>
            <li>
                <DataTitle>
                    NAME
                </DataTitle>
                <DataText>
                    {authUsername}
                </DataText>
            </li>
            <li>
                <DataTitle>
                    EMAIL
                </DataTitle>
                <DataText>
                    {authUserEmail}
                </DataText>
            </li>
            <li>
                <DataTitle>
                    WALLET
                </DataTitle>
                <DataText>
                    {metaMaskKey}
                </DataText>
            </li>
        </ul>
    </>
  )
}
