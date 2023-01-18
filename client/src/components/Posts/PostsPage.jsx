import React from 'react';
import { Card,Stack,Button,Image,Text,Heading, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'

import axios
 from 'axios';
const PostsPage = ({post, setCurrentId}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const postS = useSelector((state) => state.posts);
  console.log(postS)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


    return (
        <>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src=""
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
        </>
    )

} 
export default PostsPage