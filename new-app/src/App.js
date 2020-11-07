import Box from '@material-ui/core/Box';

//Components React
import Navbar from './Components/sub-components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Box>
        <Navbar />
        <Home />
      </Box>
    </div>
  );
}

export default App;
