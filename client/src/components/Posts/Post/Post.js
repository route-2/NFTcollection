import React from 'react';
import moment from 'moment';
import { Card,Image,Heading,Text,Divider,Stack,ButtonGroup,  Grid, CardHeader,Button, CardBody, CardFooter } from '@chakra-ui/react'
import { deletePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';
const Post = ({post,setCurrentId}) => {



   
    const dispatch = useDispatch();
    return (
        <>

     
    <Grid> 
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={post.selectedFile}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {post.title}</Heading>
      <Text>
       {post.message}
      </Text>
      <Text>
       {post.title}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       {post.creator}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      {moment(post.createdAt).fromNow()}
      </Text>
      <Button 
      variant='solid' colorScheme='blue' onClick={()=> setCurrentId(post._id)}>
       ....
      </Button>
      

    </Stack>
  </CardBody>
  <Stack mt='6' ml='4' spacing='1'> 
  <Text> {post.tags.map((tag)=>`#${tag}`)}</Text>
  </Stack>
  
  <CardFooter>
  
  <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={()=> {}}>
      Like &nbsp; 
       {post.likeCount}
      </Button>
      <Button variant='solid' colorScheme='blue' onClick={()=> dispatch(deletePost(post._id))}>
     Delete
      </Button>
      
    </ButtonGroup>
   
  </CardFooter>
  
 
</Card>
    </Grid>
     
           </>

    );
    }
    export default Post;