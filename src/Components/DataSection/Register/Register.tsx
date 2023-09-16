import React from 'react'
import styled from 'styled-components';
import RegisterForm from './RegisterForm';

const RegisterFormTitle = styled.h2`
    color: #E75626;
    font-size: 36px;
    margin-bottom: 18px;
`

const RegisterFormDescription = styled.p`
    font-size: 16px;
    max-width: 421px;
    line-height: 19.2px;
    color: #FFFFFF;
    margin-bottom: 36px;
`

export default function Register() {
  return (
      <div>
        <RegisterFormTitle>Beta test registration</RegisterFormTitle>
        <RegisterFormDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </RegisterFormDescription>
        <RegisterForm /> {/*  registerForm отдельный компонент */}
      </div>
  )
}
