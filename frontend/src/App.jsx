import Navbar from './components/Navbar';
import routes from './routes/routes'
import { useRoutes } from 'react-router-dom'


const App = () => {
  const routing= useRoutes(routes);
  return (
   <>
   <Navbar/>
   {routing}
   </>
  )
}

export default App
