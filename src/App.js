import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoriteDetail from './components/FavoriteDetail';
import FavoriteHero from './components/FavoriteHero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Container } from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';
import Register from './components/Register';
import AuthenticatedLayout from './components/AuthenticatedLayout';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />

          <Route path="/" element={<AuthenticatedLayout />} >
            <Route index element={<Home />} />
            <Route path="/favorite" element={<FavoriteHero />} />
            <Route path="/favorite/:hero_id" element={<FavoriteDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
