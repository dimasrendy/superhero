import Search from "./Search";
import Superhero from "./Superhero";
import { useState } from "react";

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [superhero, setSuperhero] = useState(null);
    const [isError, setIsError] = useState('');

    const getHero = () => {
        fetch(`https://www.superheroapi.com/api.php/3015058375253235/search/${searchValue}`)
        .then(res => res.json())
        .then(result => {
            setSuperhero(result.results)
            setIsError(result.response)
        })
        .catch(e => {
            console.log('Error')
        })
    };

    const addFavorite = (e, hero) => {
        e.preventDefault();

        fetch('http://localhost:3001/add', {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json' 
            },
            body: JSON.stringify({
                id : hero.id,
                name : hero.name,
                fullname : hero.biography['full-name'],
                alter_ego : hero.biography['alter-egos'],
                birth_place : hero.biography['place-of-birth'],
                publisher : hero.biography.publisher,
                combat : hero.powerstats.combat,
                durability : hero.powerstats.durability,
                intelligence : hero.powerstats.intelligence,
                power : hero.powerstats.power,
                speed : hero.powerstats.speed,
                strength : hero.powerstats.strength,
                gender : hero.appearance.gender,
                hair_color : hero.appearance['hair-color'],
                eye_color : hero.appearance['eye-color'],
                race : hero.appearance.race,
                height : hero.appearance.height[1],
                weight : hero.appearance.weight[1],
                work_location : hero.work.base,
                occupation : hero.work.occupation,
                connections : hero.connections['group-affiliation'],
                relatives : hero.connections.relatives,
                images : hero.image.url
            })
        })
        .then(() => {
            alert('Hero Added to Favorite');
        })
    }  

    return (
        <>
            <Search getHero={ getHero } setSearchValue={ setSearchValue }/>
            <Superhero superhero={ superhero } isError={ isError } addFavorite={ addFavorite }/>
        </>
    );
}
 
export default Home;