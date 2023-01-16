import React from "react";
import { Box, Grid, Text, Button, GridItem, Image } from "@chakra-ui/react";

import Posts from "../Posts/Posts";
import Form from "../Forms/Forms";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Pagination from "../Pagination"
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Box m={2}>
      <Grid
        templateColumns="repeat(5, 1fr)"
        justifyContent="space-between"
        align="stretch"
       
      >
        <GridItem colSpan={2} h="10">
          {" "}
          <Posts setCurrentId={setCurrentId} />{" "}
        </GridItem>
        <GridItem colStart={8} colEnd={8} h="10">
          {" "}
          <Form currentId={currentId} setCurrentId={setCurrentId} />{" "}
            <div>
              <Pagination />






            </div>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
