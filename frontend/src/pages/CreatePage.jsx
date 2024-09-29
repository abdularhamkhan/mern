import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const CreatePage = () => {
  const [newProduct, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        <Heading>

          Create New Product
        </Heading>
      </VStack>
      Create your products here
    </Container>
  )
}

export default CreatePage
