import React,{useEffect,useState} from "react";
import { Box, Grid, Text, GridItem, Image } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Forms";
import pexels from "./images/pexels.png";
import { useDispatch } from "react-redux";
import {getPosts} from "./actions/posts";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
 
  return (
    <Box w="100%" p={4}>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={() => <h1>Auth</h1>} />
      </Routes>
      </BrowserRouter>


     
    </Box>
  );
};
export default App;
