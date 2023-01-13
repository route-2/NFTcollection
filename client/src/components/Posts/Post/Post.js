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
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Box,
} from "@chakra-ui/react";
import { deletePost, likePost } from "../../../actions/posts";
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Posts from "../Posts";
const Post = ({ post, setCurrentId }) => {
  const [liked, setLiked] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const Likes = () => {
  
    console.log(post.likes.length)
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? 
      (
        <>
       
       {post.likes.length} {post.likes.length === 1 ? <BsHeartFill boxSize="6" colorScheme="red.500"/> : <BsHeartFill boxSize="6" colorScheme="red.500"/>}

        </>
        
      ) : (
        <BsHeart fontSize={'24px'} />
      )
    }

    return <Text fontSize="2xl" as="i" textAlign="center"><BsHeart fontSize={'24px'} /> </Text>;
  };
const color = useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan');
  const dispatch = useDispatch();
  return (
    <>

    {user?.result?.googleId  || user?.result?._id  ? ( 
     
      <div >
       <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={color}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={post.selectedFile}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
            {post.tags.map((tag) => `#${tag}`)}
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
          {post.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
          {post.message}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
            {moment(post.createdAt).fromNow()}
            </Text>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (

              
<Button
  variant="ghost"
 
  width={"30px"}
  top={"0"}
  right={"0"}
  absolute={"true"}
  fontSize={'xl'}
  colorScheme="black"
  onClick={() => setCurrentId(post._id)}
>
  ....
</Button>
)}
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
           {user?.result?.googleId  || user?.result?._id  ? (
            <Button
              variant="ghost"
              colorScheme="red"
              textColor={"black"}
              onClick={() => dispatch(likePost(post._id))}
            >
             {post.likes.length} &nbsp; {post.likes.length === 1 ? <BsHeartFill boxSize="6" colorScheme="red.500"/> : <BsHeartFill boxSize="6" colorScheme="red.500"/>}
            </Button>
            ) : (
              <Text fontSize="2xl" as="i" textAlign="center"><BsHeart fontSize={'24px'} /> </Text>
            )}
            
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
              <Button
                variant="ghost"
                colorScheme="red"
               
                onClick={() => dispatch(deletePost(post._id))}

              >
                <DeleteIcon boxSize={6} color="red.500" />
              </Button>
              )}
          </Flex>
        </HStack>
      </Box>
    </Center> </div>

      ) : ( 
        <>
        Sign in to see posts 
        </>
        )}
      
    </>
  );
};
export default Post;
