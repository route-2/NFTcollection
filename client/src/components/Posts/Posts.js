import React from "react";
import Post from "./Post/Post";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Card, Grid, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return !posts.length ? (
    <Text fontSize="2xl" as="i" textAlign="center">
      No Posts
    </Text>
  ) : (
    <>
      <Grid alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid
            key={post._id}
            flex
            p={"1"}
            flexDirection={"row"}
            xs={12}
            sm={6}
          >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Posts;
