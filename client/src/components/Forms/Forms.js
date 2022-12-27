import React from "react";
import { Text,FormControl, Box,Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import FileBase from "react-file-base64";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

  const handleSubmit = () => {};
  const clear = () => {};

  return (
    <div>
     <Text fontSize='2xl' as='b' > Create a Post </Text>
       <form> 
        <FormControl>
            <Input
                type="text"
                placeholder="Creator"
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Input
                type="text" 
                placeholder="Title"
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Input
                type="text"
                placeholder="Message"
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <Input
                type="text"
                placeholder="Tags"
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            />
            </FormControl>

            <FormControl>
            <div>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                        setPostData({ ...postData, selectedFile: base64 })
                    }
                />
            </div>
            <Button onClick={handleSubmit} colorScheme="teal" variant="outline">
                Submit
            </Button>
            <Button onClick={clear} colorScheme="teal" variant="outline">
                Clear
            </Button>

        </FormControl>
        </form>
    </div>
  );
};
export default Form;
