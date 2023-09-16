import React from 'react'
import styled from 'styled-components';
import { dataAPI } from '../../../service/UserService';
import { IUser } from '../../../models/IUser';
import { useAppSelector } from '../../../hooks/redux';

const UsersContainer = styled.div`
    max-height: 680px;
`

const UsersTitle = styled.h2`
    font-size: 36px;
    color: white;
    margin-bottom: 36px;
`

const UsersList = styled.ul`
    max-height: 668px;
    overflow-y: scroll;
`

const UsersListElements = styled.li`
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    font-size: 14px;
`

const UsersListText = styled.p`
    color: white;
`

export default function UsersTable() {

    const {isAuth} = useAppSelector(state => state.authReducer);
    let listItems;
    const {data} = dataAPI.useFetchUsersQuery('');

    if(isAuth) {

      listItems = data.items.map((item: IUser) => <UsersListElements key={item.id}>
            <UsersListText>{item.username}</UsersListText>
            <UsersListText>{item.email}</UsersListText>
            <UsersListText>{item.address.slice(0, 19)}...</UsersListText>
      </UsersListElements>)
    }

  return (
    <>
    {isAuth ? <>
                <UsersContainer>
                <UsersTitle>{'Participation listing (enable only for participants)'}</UsersTitle>
                  <UsersList>
                    <li>
                    {/* <UsersListElements key={item.id}>
                        <UsersListText>{item.username}</UsersListText>
                        <UsersListText>{item.email}</UsersListText>
                        <UsersListText>{item.address.slice(0, 19)}...</UsersListText>
                    </UsersListElements> */}
                    </li> 
                    {/* Таблица отображается, только при залогиненном юзере, поэтому данные можно подтянуть из стейта */}
                    {listItems}
                  </UsersList>
                </UsersContainer>
              </>
            :
            <></>
    }
    </>
  )
}
