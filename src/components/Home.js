import Search from "./Search";
import Superhero from "./Superhero";
import { useState, useEffect } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [superhero, setSuperhero] = useState(null);
  const [isError, setIsError] = useState('');

  const getHero = async () => {
    try {
      const response = await fetch(`https://www.superheroapi.com/api.php/3015058375253235/search/${searchValue}`);
      const data = await response.json();
      setSuperhero(data.results);
      setIsError(data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (e, hero) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id: hero.id,
        name: hero.name,
        images: hero.image.url
      })
    };

    try {
      await fetch('http://localhost:3001/add', requestOptions);
      alert('Hero added');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Search getHero={getHero} setSearchValue={setSearchValue} />
      <Superhero superhero={superhero} isError={isError} addFavorite={addFavorite} />
    </>
  );
}

export default Home;