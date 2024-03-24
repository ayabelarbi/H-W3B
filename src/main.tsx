import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Demo from "./pages/map.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ChakraProvider } from "@chakra-ui/react";
import MapComponent from "./pages/map.tsx";
import Leaderboard from "./pages/leaderboard.tsx";
import GetStarted from "./pages/getstarted.tsx";
import RetailPage from "./pages/RetailPage.tsx";
import ClientPage from "./pages/ClientPage.tsx";


import Fonts from "./utils/fonts.tsx";
import theme from "./utils/theme.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
   
      <ChakraProvider theme={theme}>
        <Fonts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path='/map' element={<MapComponent />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/getstarted' element={<GetStarted />} /> 
          <Route path='/RetailPage' element={<RetailPage />} />      
          <Route path='/ClientPage' element={<ClientPage />} />

        </Routes>
      </ChakraProvider>

    </BrowserRouter>
  </React.StrictMode>
);
