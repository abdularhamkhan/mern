import React from 'react'
import { Container, Flex, Text, HStack, Button, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SquarePlus, Moon,Sun  } from 'lucide-react'
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1440px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Products 🛒 </Link>
        </Text>
        <HStack
          spacing={2}
          alignItems={"center"}
        >
          <Link to={"/create"}>
            <Button>
              <SquarePlus />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {
              colorMode==='light' ? <Moon/>:<Sun/>
            }
          </Button>
        </HStack>


      </Flex>
    </Container>
  )
}

export default Navbar
