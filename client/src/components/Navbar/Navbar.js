import React from "react";
import { Box, Flex, Stack, Text, Image, Button } from "@chakra-ui/react";
import pexels from "../../images/pexels.png";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import decode from "jwt-decode";

import Auth from "../Auth/Auth";

const Navbar = () => {

  const location = useLocation()
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();

  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    const token = user?.token;

    // JWT ...
    if( token ) {
      const decodedToken = decode(token);
      console.log(decodedToken);
      if( decodedToken.exp * 1000 < new Date().getTime() ) handleLogout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));

  }, [location]);

  return (
    <Box boxShadow="2xl" p="6" rounded="md" bg="white" color="inherit">
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text fontSize="6xl" as="i" textAlign="center">
            {" "}
            NFTs{" "}
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={8}
        >
       
          {user ? (
            <>
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="80px"
                  src={user.result.imageUrl}
                  alt={user.result.name}
                />
                <Text>{user.result.name}</Text>
                <Button onClick={handleLogout} >Logout </Button>
              </Box>
            </>
          ) : (
            <>
              <Link as={NextLink} href="/SignUp">
                {" "}
                <Button>Sign in </Button>{" "}
              </Link>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
