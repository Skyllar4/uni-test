import React from 'react'
import styled from 'styled-components';
import { useEthers } from '@usedapp/core';

const AppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
    align-items: center;
    margin-bottom: 35px;
`

const Logo = styled.div`
    background-color: #5A5A5A;
    color: #FFFFFF;
    border: 1px dashed #C7C7C7;
    font-size: 19px;
    padding: 10px 75px;
`

const MetaMaskConnectBtn = styled.button`
    background-color: #E75626;
    border-radius: 27px;
    color: white;
    padding: 13px 15px;
`

const AccountAdress = styled.h2`
    color: #E75626;
    font-size: 18px;
`

const shortenAddress = (addr: string) => `${addr.slice(0, 19)}...`;

export default function Header() {

    const { activateBrowserWallet, account } = useEthers();

    return (
        <AppHeader>
            <Logo>
                Logo
            </Logo>
            {!account ? <MetaMaskConnectBtn onClick={() => activateBrowserWallet()}>
                            CONNECT METAMASK
                        </MetaMaskConnectBtn>
            :
            <AccountAdress>{shortenAddress(account)}</AccountAdress>
            }
        </AppHeader>
    )
}
