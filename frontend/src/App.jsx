import Navbar from './components/Navbar';
import routes from './routes/routes'
import { useRoutes } from 'react-router-dom'

import { Box, useColorModeValue } from '@chakra-ui/react'


const App = () => {
  const routing = useRoutes(routes);
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      {routing}
    </Box>
  )
}

export default App
