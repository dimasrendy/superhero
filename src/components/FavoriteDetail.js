import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SuperheroStyled, SectionContainer, Section, Overview } from "./styled/Superhero.styled";
import { Button } from "./styled/Button.styled";


const FavoriteDetail = () => {
    const navigate = useNavigate();
    const { hero_id } = useParams();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/favorite/${hero_id}`)
            .then(res => res.json())
            .then(result => {
                setFavorites(result[0]);
            })
    }, [hero_id]);

    const deleteHero = (id) => {
        fetch(`http://localhost:3001/favorite/${id}`, {
            method: 'DELETE'
        })
        .then(res => navigate('/favorite'))
    };


    return (
        <> 
        {favorites && (
            
            <SuperheroStyled>
                <Overview>
                <div className="avatar">
                        <img src={favorites.images} alt="Superhero Avatar" />
                        
                    </div>
                    <div className="overview-card">
                        <div className="card-details">
                            <label>Name</label>
                            <p>{favorites.name}</p>
                        </div>
                        <div className="card-details">
                            <label>Full Name</label>
                            <p>{favorites.fullname}</p>
                        </div>
                        <div className="card-details">
                            <label>Alter Ego</label>
                            <p>{favorites.alter_ego}</p>
                        </div>
                        <div className="card-details">
                            <label>Places of Birth</label>
                            <p>{favorites.birth_place}</p>
                        </div>
                        <div className="card-details">
                            <label>Publisher</label>
                            <p>{favorites.publisher}</p>
                        </div>
                    </div>
                </Overview>
                <SectionContainer>
                    <h3>Powerstats</h3>
                    <Section>
                        <div className="details">
                            <label>Combat</label>
                            <p>{favorites.combat}</p>
                        </div>
                        <div className="details">
                            <label>Durability</label>
                            <p>{favorites.durability}</p>
                        </div>
                        <div className="details">
                            <label>Intelligence</label>
                            <p>{favorites.intelligence}</p>
                        </div>
                        <div className="details">
                            <label>Power</label>
                            <p>{favorites.power}</p>
                        </div>
                        <div className="details">
                            <label>Speed</label>
                            <p>{favorites.speed}</p>
                        </div>
                        <div className="details">
                            <label>Strength</label>
                            <p>{favorites.strength}</p>
                        </div>
                    </Section>
                </SectionContainer>
                
                <SectionContainer>
                    <h3>Appearance</h3>
                    <Section>
                        <div className="details">
                            <label>Gender</label>
                            <p>{favorites.gender}</p>
                        </div>
                        <div className="details">
                            <label>Hair Color</label>
                            <p>{favorites.hair_color}</p>
                        </div>
                        <div className="details">
                            <label>Eye Color</label>
                            <p>{favorites.eye_color}</p>
                        </div>
                        <div className="details">
                            <label>Race</label>
                            <p>{favorites.race}</p>
                        </div>
                        <div className="details">
                            <label>Height</label>
                            <p>{favorites.height}</p>
                        </div>
                        <div className="details">
                            <label>Weight</label>
                            <p>{favorites.weight}</p>
                        </div>
                    </Section>
                </SectionContainer>
                <SectionContainer>
                    <h3>Work</h3>
                    <Section>
                        <div className="details">
                            <label>Work Location</label>
                            <p>{favorites.work_location}</p>
                        </div>
                        <div className="details">
                            <label>Occupation</label>
                            <p>{favorites.occupation}</p>
                        </div>
                    </Section>
                </SectionContainer>
                <SectionContainer>
                    <h3>Connections</h3>
                    <Section>
                        <div className="details">
                            <label>Connections</label>
                            <p>{favorites.connections}</p>
                        </div>
                        <div className="details">
                            <label>Relatives</label>
                            <p>{favorites.relatives}</p>
                        </div>
                    </Section>
                </SectionContainer>
                <Button backgroundColor='#FFE162' onClick={(() => {
                    deleteHero(favorites.hero_id);
                })}>Remove from Favorite</Button>
            </SuperheroStyled>
        )}
        </>
    );
}

export default FavoriteDetail;