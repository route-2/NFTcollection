import React from 'react';
import { Card,Stack,Button,Image,Text,Heading, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'
import Post from "./Post/Post"
import { useNavigate,useParams } from 'react-router-dom';
import { getPost,getPostsBySearch } from '../../actions/posts';
import { useDispatch } from 'react-redux';

import axios
 from 'axios';
const PostsPage = () => {
 
  const [loading, setLoading] = useState(false);
 
const [post,posts, isLoading] = useSelector((state) => state.posts);
const dispatch = useDispatch();
const navigate = useNavigate();
const { id } = useParams();
  console.log(post)
  console.log(posts)
  useEffect(() => {
    dispatch(getPost(id));

    
  }, [id]);




useEffect(() => {
  if (post) {
    dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
  }
}, [post]);

if(!post) return 'Loading...';
const recommendedPosts = Object.values(posts).filter(({ _id }) => _id !== post._id);





 

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
    src={post.selectedFile}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'> {post.title}</Heading>

      <Text py='2'>
      {post.message}
      </Text>
    </CardBody>

    <CardFooter>
      <Text> Comment soon ..</Text>
    </CardFooter>
  </Stack>
</Card>

{!! recommendedPosts.length && ( 
  <Stack>
    <Heading size='md'>You might also like:</Heading>
    <Stack direction={{ base: 'column', md: 'row' }} spacing='4'>
      {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
        <Card
          key={_id}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={selectedFile}
            alt='image'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{title}</Heading>

              <Text py='2'>
              {message}
              </Text>
            </CardBody>

            <CardFooter>
              <Text> Comment soon ..</Text>

            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Stack>
  </Stack>
)}

          
        </>
    )

} 
export default PostsPage