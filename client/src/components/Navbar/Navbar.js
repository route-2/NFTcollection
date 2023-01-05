import React from 'react'
import { Box,Flex, Stack, Text, Image,Button } from '@chakra-ui/react'
import pexels from '../../images/pexels.png'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

import Auth from '../Auth/Auth';


const Navbar = () => {

  const user = null;

  return (
    <Box  boxShadow="2xl" p="6" rounded="md" bg="white" color="inherit">
    <Flex
       
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
       
        borderStyle={'solid'}
      
        align={'center'}> 

       
<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}> 
        
          <Text fontSize="6xl" as="i" textAlign="center">
            {" "}
            NFTs{" "}
          </Text>
          </Flex>
        
          
        <Stack  flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={8}>
        <Image borderRadius="full" boxSize="50px" src={pexels} alt="pexels" />
 {user ? (
  <>
  <Box>
  <Image borderRadius="full" boxSize="80px" src={user.result.imageUrl} alt={user.result.name} />
  <Text >{user.result.name}</Text> 
  <Button >Logout  </Button>
         
  </Box>

  </>

 ): (
  <>
  <Link as={NextLink} href='/Auth'> <Button>Sign in  </Button>   </Link>
  </>
  )}



        </Stack>

       
         
       
        </Flex>


        

         
            
                
            



      

      </Box>
  )
}

export default Navbar