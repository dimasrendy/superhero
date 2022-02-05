import Search from "./Search";
import Superhero from "./Superhero";
import { useState } from "react";

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [superhero, setSuperhero] = useState(null);

    const getHero = () => {
        fetch(`https://www.superheroapi.com/api.php/3015058375253235/search/${searchValue}`)
        .then(res => res.json())
        .then(result => setSuperhero(result.results))
        .catch(e => {
            console.log(e);
        })
    };

    return (
        <>
            <Search getHero={getHero} setSearchValue={setSearchValue}/>
            <Superhero superhero={superhero}/>
        </>
    );
}
 
export default Home;