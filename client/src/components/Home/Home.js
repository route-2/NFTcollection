import React from "react";
import {
  Box,
  Grid,
  Container,
  Heading,
  Text,
  Button,
  GridItem,
  Input,
  InputRightElement,
  InputGroup,
  InputRightAddon,
  Image,
} from "@chakra-ui/react";
import Pagination from "../Posts/PostsPage";
import Posts from "../Posts/Posts";
import Form from "../Forms/Forms";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import { Search2Icon } from "@chakra-ui/icons";
import { Navigate, useLocation } from "react-router-dom";
import { EmailChipInput } from "../ChipInput/ChipInput";
import { useNavigate } from "react-router-dom";

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
  const [search, setSearch] = useState([]);
  const query = useQuery();
  const [tags, setTags] = useState([]);
  const searchQuery = query.get("searchQuery");
  const tagsQuery = query.get("tags");
  const navigate = useNavigate();
  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"} &tags=${tags.join(",")}`
      );
    } else {
      dispatch(getPosts());
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlekeyPress = (e) => {
    const { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
  };
  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

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
              <InputGroup marginTop="2" size="sm">
                <Input
                  variant="h6"
                  name="search"
                  value={search}
                  placeholder=" Search Posts "
                  onKeyPress={handlekeyPress}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <InputRightElement
                  children={<Search2Icon color="gray.300" />}
                />
              </InputGroup>
              <Container>
                <EmailChipInput
                  value={tags}
                  onAdd={handleAddChip}
                  onDelete={handleDeleteChip}
                />
              </Container>

              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                onClick={searchPost}
              >
                Search
              </Button>
            </Box>

            {/* <Pagination
                   postsPerPage={postsPerPage}
                   totalPosts={posts.length}
                   paginate={paginate}
                 /> */}
          </div>{" "}
          <Form currentId={currentId} setCurrentId={setCurrentId} />{" "}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
