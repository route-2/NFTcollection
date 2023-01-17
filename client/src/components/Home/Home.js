import React from "react";
import { Box, Grid, Text, Button, GridItem, Image } from "@chakra-ui/react";
import Pagination from "../Posts/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Forms/Forms";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);



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
        <div>
            
            <Pagination
                   postsPerPage={postsPerPage}
                   totalPosts={posts.length}
                   paginate={paginate}
                 />
           
           
           
           
           
                       </div>
          {" "}
          <Form currentId={currentId} setCurrentId={setCurrentId} />{" "}
           
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
