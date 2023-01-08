import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import SignUp from "./SignUp";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Auth = () => {
  const history = useNavigate()
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const[formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
         
    if(isSignup){ 
     dispatch(signUp(formData, history))
    }else{
      dispatch(signIn(formData, history))
    }

    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
    e.preventDefault();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      backgroundColor="whiteAlpha.900"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.400" />
        <Heading color="blue.200">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input type="email" placeholder="email address" />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<CFaLock color="gray.300" />}
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="right">
                      <Text>forgot password?</Text>
                    </FormHelperText>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width="full"
                  >
                    Login
                  </Button>
                </Stack>
              </>
            )}
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="blue.500" as={NextLink} href="/SignUp">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Auth;
