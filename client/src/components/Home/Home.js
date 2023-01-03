import React from 'react'
import { Box, Grid, Text,Button, GridItem, Image } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import Posts from '../Posts/Posts';
import Form from '../Forms/Forms';
import { useState,useEffect } from 'react';

import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts';




const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
  
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId,dispatch]);
  


  return (
    <Box m={6}>
        <Grid
          templateColumns="repeat(5, 1fr)"
          justifyContent="space-between"
          align="stretch"
          gap={4}
        >
          <GridItem colSpan={2} h="10">
            {" "}
            <Posts setCurrentId={setCurrentId}/>{" "}
          </GridItem>
          <GridItem colStart={4} colEnd={6} h="10">
            {" "}
            <Form currentId={currentId} setCurrentId={setCurrentId} />{" "}
          </GridItem>
        </Grid>
      </Box>
  )
}

export default Home