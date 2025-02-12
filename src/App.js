import './App.css';
import styled, { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
