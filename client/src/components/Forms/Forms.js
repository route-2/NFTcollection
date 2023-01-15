import React, { useEffect } from "react";
import { Text, FormControl, Box, Button, Input, Center } from "@chakra-ui/react";
import { useState } from "react";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
 
  const [postData, setPostData] = useState({
   
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));
   console.log(user)
  console.log(currentId);
  console.log(postData);
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  console.log(postData);
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  console.log(currentId);
  console.log(postData);
const initialState =
  {
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };
  const clear = () => {
    setCurrentId(0);
    setPostData(
     initialState
     
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      console.log(user)
      dispatch(createPost({...postData,  name: user?.result?.name}  ));
      clear();
    } else {
      dispatch(updatePost(currentId, {...postData,  name:user?.result?.name}));
      clear();
    }
    if(!user?.result?.name){
      alert("Please Sign In")
    }
    
  };

  
 
  

  return (
    <Box
        w="100%"
        h={'xl'}
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow='dark-lg'
       > 
        <Center> 
      <Text margin={8} fontSize="2xl" as="b">
        {" "}
        {currentId ? "Edit a Post" : "Create a Post"}
      </Text>
      </Center>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        

        <FormControl>
          <Input
            type="text"
            margin={8}
            width="100%"
            placeholder="Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <Input
            type="text"
            margin={8}
            width="90%"
            placeholder="Message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <Input
            type="text"
            margin={8}
            width="90%"
            placeholder="Tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
        </FormControl>

        <FormControl>
          <Box margin={8}>
            <FileBase
              type="file"
             
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </Box>
          <Center> 
          <Button
            margin={2}
            
            onClick={handleSubmit}
            colorScheme="blackAlpha"
            variant="solid"
          >
            Submit
          </Button>
          <Button
            onClick={clear}
            margin={2}
            colorScheme="gray.500"
            variant="outline"
          >
            Clear
          </Button>
          </Center>
        </FormControl>
      </form>
      </Box>
  );
};
export default Form;
