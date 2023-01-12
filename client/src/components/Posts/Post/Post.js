import React from "react";

import moment from "moment";
import {
  Card,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  ButtonGroup,
  Grid,
  CardHeader,
  Button,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { deletePost, likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import Posts from "../Posts";
const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const Likes = () => {
    console.log(post.likes.length)
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          {" "}
          <Text  fontSize="2xl" as="i"  textAlign="center">
            {post.likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
          </Text>
        </>
      ) : (
        <Text fontSize="2xl" as="i" textAlign="center">
          {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </Text>
      );
    }

    return <Text fontSize="2xl" as="i" textAlign="center">Like</Text>;
  };

  const dispatch = useDispatch();
  return (
    <>

    {user?.result?.googleId  || user?.result?._id  ? ( 
     
      <Grid>
        <Card maxW="sm">
          <CardBody>
            <Image src={post.selectedFile} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md"> {post.title}</Heading>
              <Text>{post.message}</Text>
              <Text fontSize={"4xl"}>{post.title}</Text>

              <Text color="blue.600" fontSize="2xl">
                {moment(post.createdAt).fromNow()}
              </Text>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (

              
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => setCurrentId(post._id)}
              >
                ....
              </Button>
              )}
            </Stack>
          </CardBody>
          <Stack mt="6" ml="4" spacing="1">
            <Text> {post.tags.map((tag) => `#${tag}`)}</Text>
          </Stack>

          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => dispatch(likePost(post._id))}
              >
                {Likes()}
              </Button>
           


              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button
                variant="solid"
                colorScheme="red"
                onClick={() => dispatch(deletePost(post._id))}

              >
                Delete
              </Button>
              )}

            </ButtonGroup>
          </CardFooter>
        </Card>
      </Grid>
      ) : ( 
        <>
        Sign in to see posts 
        </>
        )}
    </>
  );
};
export default Post;
