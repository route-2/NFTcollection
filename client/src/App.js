import React,{useEffect,useState} from "react";
import { Box, Grid, Text, GridItem, Image } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Forms";
import pexels from "./images/pexels.png";
import { useDispatch } from "react-redux";
import {getPosts} from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box w="100%" p={4}>
      <Box boxShadow="2xl" p="6" rounded="md" bg="white" color="inherit">
        <HStack justifyContent="space-between">
          <Text fontSize="6xl" as="i" textAlign="center">
            {" "}
            NFTs{" "}
          </Text>
          <Image borderRadius="full" boxSize="80px" src={pexels} alt="pexels" />
        </HStack>
      </Box>

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
    </Box>
  );
};
export default App;
