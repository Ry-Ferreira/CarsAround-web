import Box from '@material-ui/core/Box';

//Components React
import Navbar from './Components/sub-components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';

function App() {
  return (
    <div>
      <Box>
        <Navbar />
        <Home />
        <Services />
        <About />
      </Box>
    </div>
  );
}

export default App;
