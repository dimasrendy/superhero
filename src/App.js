import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoriteDetail from './components/FavoriteDetail';
import FavoriteHero from './components/FavoriteHero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Container } from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Register />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorite" element={<FavoriteHero />} />
            <Route path="/favorite/:hero_id" element={<FavoriteDetail />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
