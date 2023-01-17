import React from "react";
import { Box, Grid, Text, Button, GridItem,Input,InputRightElement,InputGroup,InputRightAddon, Image } from "@chakra-ui/react";
import Pagination from "../Posts/Pagination";
import Posts from "../Posts/Posts";
import Form from "../Forms/Forms";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import {Search2Icon} from "@chakra-ui/icons"
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const[search,setSearch]=useState([]);
  const query = useQuery();
  const[tags,setTags]=useState([]);
  const searchQuery = query.get('searchQuery');
  

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


const handlekeyPress = (e) => {
    const { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
  };
  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));
 
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

        <Box>
        <Text variant="h6" align="center"
        name="search"   
        value={search}           
         label="search posts"
         onChange={(e) => setSearch(e.target.value)}>

        
        
        
        </Text>
        <InputGroup size='sm'>
   
    <Input placeholder=' Search ' onAdd={handleAddChip}  onDelete={handleDeleteChip} value={tags} />
    <InputRightElement children= {<Search2Icon color='gray.300'/>} />
  </InputGroup>

        
        
        
        
        
        </Box>
            



















            {/* <Pagination
                   postsPerPage={postsPerPage}
                   totalPosts={posts.length}
                   paginate={paginate}
                 /> */}
           
           
           
           
           
                       </div>
          {" "}
          <Form currentId={currentId} setCurrentId={setCurrentId} />{" "}
           
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
