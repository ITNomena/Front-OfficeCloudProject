import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import VoirAnnonces from './pages/VoirAnnonces';
import ChatBox from './components/type/ChatBox';
import GlobalStyles from './styles/GlobalStyles';
import VoirChat from './pages/VoirChat';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        {/* <VoirChat/> */}
        {/* <LandingPage /> */}
        <VoirAnnonces />
      </ThemeProvider>
    </>
  );
}

export default App;
