import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle }from 'styled-components';
import App from './App';
import { DAppProvider, Config, Goerli, Localhost } from '@usedapp/core'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { getDefaultProvider } from 'ethers';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli'),
    [Localhost.chainId]: 'http://localhost:3000',
  },
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]) // error страницу не успеваю сделать

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-repeat: no-repeat;
}

.orangeLine {
  margin: auto;
  transform: rotate(-90deg);
}

body {
  background-color: #171719;
  font-family: 'Bebas Neue', sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 210px;
}

button {
  cursor: pointer;
  border: none;
}

ul,li {
  list-style: none;
}

// .App {
//   max-width: 1440px;
//   margin: 0 auto;
//   padding-bottom: 210px;
// }

`

root.render(
  <React.StrictMode>
    <>
    <DAppProvider config={config}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Global />
        <App />
      </Provider>
    </DAppProvider>
    </>
  </React.StrictMode>
);