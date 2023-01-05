import React,{useEffect,useState} from "react";
import { Box, Grid, Text, GridItem, Image } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import SignUp from "./components/Auth/SignUp";

const App = () => {
 
  return (
    <Box w="100%" p={4}>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/auth"  element={<Auth/>} />
        <Route path="/signup"  element={<SignUp/>} />
      </Routes>
      </BrowserRouter>


     
    </Box>
  );
};
export default App;
