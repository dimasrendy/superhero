import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoriteDetail from './components/FavoriteDetail';
import FavoriteHero from './components/FavoriteHero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Container } from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite/details/:name" element={<FavoriteDetail />} />
            <Route path="/favorite" element={<FavoriteHero />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
