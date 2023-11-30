
//components
import Header from './components/header/header.jsx';
import Home from './components/home/Home.jsx';
import { Box } from '@mui/material';
function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop:"54px"}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
