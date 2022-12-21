import React from "react";
import Post from "./Post/Post";
import { Text } from '@chakra-ui/react'


const Posts = () => {
    return (
        <>

     
       <Text fontSize='2xl' as='b' > Posts below </Text>
     <Post />
           </>

    );
    }
    export default Posts;