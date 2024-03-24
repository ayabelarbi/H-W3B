import React, {useState, createContext, useContext} from "react";
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
import Collection from "./pages/Collection.tsx";
import Subscribe from "./pages/Subscribe.tsx";

export const AuthContext = createContext<any>(null);

import Fonts from "./utils/fonts.tsx";
import theme from "./utils/theme.tsx";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Fonts />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path='/map' element={<MapComponent />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/getstarted' element={<GetStarted />} /> 
            <Route path='/RetailPage' element={<RetailPage />} />      
            <Route path='/ClientPage' element={<ClientPage />} />
            <Route path='/Collection' element={<Collection />} />
            <Route path='/Subscribe' element={<Subscribe />} />
            
            
          </Routes>
          </AuthContext.Provider>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);