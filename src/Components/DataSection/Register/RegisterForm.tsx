import React from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { authSlice } from '../../../store/reducers/authReducer';
import UserData from './UserData';

const Form = styled.form`
    display: block;
`

const FormInput = styled.input`
    display: block;
    margin-top: 8px;
    margin-bottom: 24px;
    border: 1px solid #FFFFFF;
    color: white;
    background-color: transparent;
    border-radius: 30px;
    padding: 12px 120px 12px 18px;
`

const FormLabel = styled.label`
    font-size: 24px;
    color: #FFFFFF;
`

const FormBtn = styled.button`
    color: #FFFFFF;
    background-color: #E75626;
    padding: 10px 24px 6px 24px;
    border-radius: 30px;
    font-size: 15px;
`

export default function RegisterForm() {

    const {isAuth, authUsername, authUserEmail} = useAppSelector(state => state.authReducer);
    const {setAuth, setEmail, setUsername} = authSlice.actions;
    const dispatch = useAppDispatch();

    const [username, setUserName] = React.useState('');
    const [email, setUserEmail] = React.useState('');

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setAuth(true));
        dispatch(setEmail(email));
        dispatch(setUsername(username));
        setUserName('');
        setEmail('');
    } // По ТЗ форму не нужно валидировать)

  return (
        <>
        {!isAuth ? <Form onSubmit={handleSubmit} action="#" method='POST'>
                        <FormLabel>
                            NAME
                            <FormInput onChange={handleChangeName} value={username} type="text" placeholder='We will display your name in participation list' />
                        </FormLabel>
                        <FormLabel>
                            EMAIL
                            <FormInput onChange={handleChangeEmail} value={email} type="email" placeholder='We will display your email in participation list'/>
                        </FormLabel>
                        <FormBtn type="submit">GET EARLY ACCESS</FormBtn>
                    </Form>
                    :
                    <>
                        <UserData userName={authUsername} userEmail={authUserEmail}/>
                    </>
                }
        </>
    )
}
