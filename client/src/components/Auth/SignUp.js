import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import {useNavigate} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import {signup,signin} from '../../actions/auth'



const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export default function SignupCard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  
  
  const isSignUp = true;
  const [showPassword, setShowPassword] = useState(false);
  
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    
    try {
      dispatch({type: 'AUTH', data: {result, token}})
      
      
      navigate('/')
      
      
      
    } catch (error) {
      console.log(error)
      
    }
    
    
    
    
    
    
    console.log(result);
  };
  
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      console.log(form)
      dispatch(signup(form, navigate));
      
    } else {
      
      dispatch(signin(form, navigate));
    }
  };
  
  
  const googleFailure = async (error) => {
    console.log("Google Sign In was unsuccessful. Try again later");
    
    console.log(error)
  };
  
  const MY_CLIENT_ID = "836145811302-9tbg2ia268mk7vguof3e8i40nj58clhs.apps.googleusercontent.com"
  useEffect(() => { const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN; function start() { gapi.client.init({ clientId: process.env.GOOGLE_API_TOKEN, scope: "", }); } gapi.load("client:auth2", start); });
  console.log(MY_CLIENT_ID)
  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });
  
  return (
    <Flex
    minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
          <form onSubmit={handleSubmit}> 
          { isSignUp && (

            
            <HStack>
              
              <Box>
                <FormControl
                  id="firstName"
                  isRequired
                  
                >
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={handleChange} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName"  >
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={handleChange} type="text" />
                </FormControl>
              </Box>
            </HStack>
            )};
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={handleChange} type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
                {isSignUp && (
                  <Input
                    id="confirmPassword"
                    name=" confirm password"
                    type="password"
                    placeholder=" Repeat Password"
                    onChange={handleChange}
                  />
                )}
              </InputGroup>
            </FormControl>
            <GoogleLogin 
            clientId={MY_CLIENT_ID}
            render={(renderProps) => (
              <>
              <Button onClick={renderProps.onClick}
               disabled={renderProps.disabled} 
               backgroundColor={"blue.200"}
               variant={"outline"} > Google Sign-In </Button>

              </>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
           
            





            />
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                type="submit"
                
                _hover={{
                  bg: "blue.500",
                }}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} as={NextLink} href="/Auth">
                 <Button onClick={switchMode}> 
                  Login
                  </Button>
                </Link>
              </Text>
            </Stack>
            </form>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
