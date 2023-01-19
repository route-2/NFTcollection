import React from 'react';
import { Card,Stack,Button,Image,Text,Heading, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'
import Post from "./Post/Post"
import { useNavigate,useParams } from 'react-router-dom';
import { getPost,getPostsBySearch,getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import { fetchPostsBySearch } from '../../api';
import Comments from './Comments';

import axios
 from 'axios';
const PostsPage = () => {
 
  const [loading, setLoading] = useState(false);
 const postS = useSelector((state) => state.posts);
const[post,setPost] = useState([]);
const[recommendedPosts,setRecommendedPosts] = useState([]);

const dispatch = useDispatch();
const navigate = useNavigate();
const { id } = useParams();
  //console.log(post)
  // console.log(posts)
  useEffect(() => {
    
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:5000/posts/${id}`);
      // const {res} = getPostsBySearch({ search: 'none', tags: data?.tags.join(',') });
      // console.log(res);
      setPost(data);
    }

    fetchData();
    
  }, [id]);

  


useEffect(() => {

  const getRecommends = async () => {
    if (post) {
      const tag = (post?.tags?.join(','));
      const data  = await axios.get(`http://localhost:5000/posts/search?searchQuery=none&tags=${tag}`);
      setRecommendedPosts(data?.data?.data);
    }
    }
      getRecommends();
      console.log(recommendedPosts)
  }, [post]);

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
      <Heading size='md'></Heading>

      <Text py='2'>
      {post.message}
      </Text>
    </CardBody>

    <CardFooter>
     <Comments post={post}/>
    </CardFooter>
  </Stack>
</Card>

  { recommendedPosts ? ( 
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
              <Comments post={post}/>

            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Stack>
  </Stack>
):null}

          
        </>
    )

} 
export default PostsPage