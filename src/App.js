import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar />
    </Router>
      
   </ThemeProvider>
  );
}

export default App;
