import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SuperheroStyled, SectionContainer, Section, Overview } from "./styled/Superhero.styled";
import { Button } from "./styled/Button.styled";


const FavoriteDetail = () => {
    const navigate = useNavigate();
    const { hero_id } = useParams();
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        const favDetail = async () => {
            try {
                const request = await fetch(`https://www.superheroapi.com/api.php/3015058375253235/${hero_id}`);
                const data = await request.json();
                setFavorites(data);
            } catch (error) {
                console.log(error);
            }
        }
        favDetail();
    }, [hero_id]);

    const deleteHero = async () => {
        try {
            await fetch(`http://localhost:3001/favorite/${hero_id}`, {
                method: 'DELETE'
            });
            navigate('/favorite');
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <>
            {favorites &&
                (

                    <SuperheroStyled>
                        <Overview>

                            <div className="avatar">
                                <img src={favorites.image.url} alt="Superhero Avatar" />
                            </div>
                            <div className="overview-card">
                                <div className="card-details">
                                    <label>Name</label>
                                    <p>{favorites.name}</p>
                                </div>
                                <div className="card-details">
                                    <label>Full Name</label>
                                    <p>{favorites.biography['full-name']}</p>
                                </div>
                                <div className="card-details">
                                    <label>Alter Ego</label>
                                    <p>{favorites.biography['alter-egos']}</p>
                                </div>
                                <div className="card-details">
                                    <label>Places of Birth</label>
                                    <p>{favorites.biography['place-of-birth']}</p>
                                </div>
                                <div className="card-details">
                                    <label>Publisher</label>
                                    <p>{favorites.biography.publisher}</p>
                                </div>
                            </div>
                        </Overview>
                        <SectionContainer>
                            <h3>Powerstats</h3>
                            <Section>
                                <div className="details">
                                    <label>Combat</label>
                                    <p>{favorites.powerstats.combat}</p>
                                </div>
                                <div className="details">
                                    <label>Durability</label>
                                    <p>{favorites.powerstats.durability}</p>
                                </div>
                                <div className="details">
                                    <label>Intelligence</label>
                                    <p>{favorites.powerstats.intelligence}</p>
                                </div>
                                <div className="details">
                                    <label>Power</label>
                                    <p>{favorites.powerstats.power}</p>
                                </div>
                                <div className="details">
                                    <label>Speed</label>
                                    <p>{favorites.powerstats.speed}</p>
                                </div>
                                <div className="details">
                                    <label>Strength</label>
                                    <p>{favorites.powerstats.strength}</p>
                                </div>
                            </Section>
                        </SectionContainer>

                        <SectionContainer>
                            <h3>Appearance</h3>
                            <Section>
                                <div className="details">
                                    <label>Gender</label>
                                    <p>{favorites.appearance.gender}</p>
                                </div>
                                <div className="details">
                                    <label>Hair Color</label>
                                    <p>{favorites.appearance['hair-color']}</p>
                                </div>
                                <div className="details">
                                    <label>Eye Color</label>
                                    <p>{favorites.appearance['eye-color']}</p>
                                </div>
                                <div className="details">
                                    <label>Race</label>
                                    <p>{favorites.appearance.race}</p>
                                </div>
                                <div className="details">
                                    <label>Height</label>
                                    <p>{favorites.appearance.height[1]}</p>
                                </div>
                                <div className="details">
                                    <label>Weight</label>
                                    <p>{favorites.appearance.weight[1]}</p>
                                </div>
                            </Section>
                        </SectionContainer>
                        <SectionContainer>
                            <h3>Work</h3>
                            <Section>
                                <div className="details">
                                    <label>Work Location</label>
                                    <p>{favorites.work.base}</p>
                                </div>
                                <div className="details">
                                    <label>Occupation</label>
                                    <p>{favorites.work.occupation}</p>
                                </div>
                            </Section>
                        </SectionContainer>
                        <SectionContainer>
                            <h3>Connections</h3>
                            <Section>
                                <div className="details">
                                    <label>Connections</label>
                                    <p>{favorites.connections['group-affiliation']}</p>
                                </div>
                                <div className="details">
                                    <label>Relatives</label>
                                    <p>{favorites.connections.relatives}</p>
                                </div>
                            </Section>
                        </SectionContainer>
                        <Button backgroundColor='#FFE162' onClick={() => {
                            deleteHero()
                        }}>Remove from Favorite</Button>
                    </SuperheroStyled>
                )
            }
        </>
    );
}

export default FavoriteDetail;