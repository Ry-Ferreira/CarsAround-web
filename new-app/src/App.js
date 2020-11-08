import Box from '@material-ui/core/Box';

//Components React
import Navbar from './Components/sub-components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import HeaderAbout from './Components/sub-components/HeaderAbout';
import About from './Components/About';
import Team from './Components/Team';

function App() {
  return (
    <div>
      <Box>
        <Navbar />
        <Home />
        <Services />
        <Box>
          <HeaderAbout />
        </Box>
        <About />
        <Team />
      </Box>
    </div>
  );
}

export default App;
