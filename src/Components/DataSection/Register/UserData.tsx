import React from 'react'
import styled from 'styled-components';

interface UserDataProps {
    userName: string,
    userEmail: string
}

const DataTitle = styled.h2`
    font-size: 24px;
    margin-top: 36px;
    margin-bottom: 8px;
    color: #FFFFFF;
`

const DataDescription = styled.p`
    font-size: 32px;
    color: #E75626;
`

const ListButton = styled.button`
    background-color: #E75626;
    color: white;
    padding: 10px 24px 6px 24px;
    border-radius: 30px;
    margin-top: 28px;
    opacity: 50%;
    font-size: 15px;
`

export default function UserData(props: UserDataProps) {
  return (
    <ul>
        <li>
            <DataTitle>
                NAME
            </DataTitle>
            <DataDescription>
                {props.userName}
            </DataDescription>
        </li>
        <li>
            <DataTitle>
                EMAIL
            </DataTitle>
            <DataDescription>
                {props.userEmail}
            </DataDescription>
        </li>
        <li>
            <ListButton disabled>LIST ME TO THE TABLE</ListButton>
        </li>
    </ul>
  )
}
