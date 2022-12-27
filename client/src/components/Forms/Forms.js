import React from "react";
import { Text,FormControl, Box,Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {


    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };
  const clear = () => {};
  

  return (
    <div  spacing={4}>
     <Text  margin={4} fontSize='2xl' as='b' > Create a Post </Text>
       <form> 
        <FormControl >
            <Input
                type="text"
                margin={4}
                
                placeholder="Creator"
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Input
                type="text"
                margin={4} 
                placeholder="Title"
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Input
                type="text"
                margin={4}
                placeholder="Message"
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Input
                type="text"
                margin={4}
                placeholder="Tags"
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Box margin={4} >
            
                <FileBase
                 
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                        setPostData({ ...postData, selectedFile: base64 })
                    }
                />
            </Box>
            <Button  margin={4}  onClick={handleSubmit} colorScheme="teal" variant="solid">
                Submit
            </Button>
            <Button onClick={clear}  margin={4} colorScheme="teal" variant="outline">
                Clear
            </Button>

        </FormControl>
        </form>
    </div>
  );
};
export default Form;
