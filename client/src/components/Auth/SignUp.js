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
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { GoogleLogin } from "react-google-login";

export default function SignupCard() {
  const handleChange = (e) => {
    e.preventDefault();
  };
  const isSignUp = true;
  const [showPassword, setShowPassword] = useState(false);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
  };
  const googleFailure = async (error) => {
    console.log("Google Sign In was unsuccessful. Try again later");
    
    console.log(error)
  };
  googleFailure();

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
            <HStack>
              <Box>
                <FormControl
                  id="firstName"
                  isRequired
                  handleChange={handleChange}
                >
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" handleChange={handleChange}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
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
                    name=" confirm password"
                    type="password"
                    placeholder=" Repeat Password"
                    handleChange={handleChange}
                  />
                )}
              </InputGroup>
            </FormControl>
            <GoogleLogin 
            clientId="836145811302-9tbg2ia268mk7vguof3e8i40nj58clhs.apps.googleusercontent.com"
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
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
