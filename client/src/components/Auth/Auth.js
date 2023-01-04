import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';



const Auth = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};
  const isSignup = false;
    const state = null;
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form onSubmit={handleSubmit}>
          
          <Grid container spacing={2}>
{
  isSignup && (
    <>
      <Grid item xs={12} sm={6}>
      <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl id="firstName">
              <FormLabel handleChange={handleChange} >First Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
      </Grid>
      </>
  )
}




          </Grid>
          
          
          
          
          
          
          
          
          
          
          
          
          
           </form>
            
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Auth