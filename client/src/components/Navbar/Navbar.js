import React from 'react'
import { Box, HStack, Text, Image,Button } from '@chakra-ui/react'
import pexels from '../../images/pexels.png'
import {  Link } from 'react-router-dom'


const Navbar = () => {

  const user = null;

  return (
    <Box flex flexDirection={'row'} boxShadow="2xl" p="6" rounded="md" bg="white" color="inherit">
       <div> 
        <HStack justifyContent="space-between">
          <Text fontSize="6xl" as="i" textAlign="center">
            {" "}
            NFTs{" "}
          </Text>
          <Image borderRadius="full" boxSize="80px" src={pexels} alt="pexels" />
          <Text >Sign Up </Text> 
         
        </HStack>
        </div>


        <div>
        <Box>
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
  <Button  component={Link} to ='/auth'> Sign in  </Button>
  </>
  )}



        </Box>

        </div>

         
            
                
            



      

      </Box>
  )
}

export default Navbar