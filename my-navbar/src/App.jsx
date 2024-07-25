import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TravelDestinations from './pages/TravelDestinations';
import TravelBags from './pages/TravelBags';
import Search from './pages/Search';
import Music from './pages/Music';
import styled from 'styled-components';
import Footer from './components/Footer'

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f0f4f8;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-destinations" element={<TravelDestinations />} />
        <Route path="/travel-bags" element={<TravelBags />} />
        <Route path="/search" element={<Search />} />
        <Route path="/music" element={<Music />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;