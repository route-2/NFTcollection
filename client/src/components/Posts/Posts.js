import React from "react";
import Post from "./Post/Post";
import { Text } from '@chakra-ui/react'
import { useSelector } from "react-redux";



const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
    return (
        <>

     
       <Text fontSize='2xl' as='b' > Posts below </Text>
     <Post />
           </>

    );
    }
    export default Posts;