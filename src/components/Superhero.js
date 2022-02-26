import { SuperheroStyled, SectionContainer, Section, Overview } from "./styled/Superhero.styled";
import { Button } from "./styled/Button.styled";

const Superhero = ({ superhero, isError, addFavorite }) => {
    
    return (
        <>
        {isError === 'error' && "Not Found"}
        {superhero && superhero.map(hero => (

            (<SuperheroStyled key={hero.id}>
                <Overview>
                    <div className="avatar">
                        <img src={hero.image.url} alt="Superhero Avatar" />
                    </div>
                    <div className="overview-card">
                        <div className="card-details">
                            <label>Name</label>
                            <p>{hero.name}</p>
                        </div>
                        <div className="card-details">
                            <label>Full Name</label>
                            <p>{hero.biography['full-name']}</p>
                        </div>
                        <div className="card-details">
                            <label>Alter Ego</label>
                            <p>{hero.biography['alter-egos']}</p>
                        </div>
                        <div className="card-details">
                            <label>Places of Birth</label>
                            <p>{hero.biography['place-of-birth']}</p>
                        </div>
                        <div className="card-details">
                            <label>Publisher</label>
                            <p>{hero.biography.publisher}</p>
                        </div>
                    </div>
                </Overview>
                <SectionContainer>
                    <h3>Powerstats</h3>
                    <Section>
                        <div className="details">
                            <label>Combat</label>
                            <p>{hero.powerstats.combat}</p>
                        </div>
                        <div className="details">
                            <label>Durability</label>
                            <p>{hero.powerstats.durability}</p>
                        </div>
                        <div className="details">
                            <label>Intelligence</label>
                            <p>{hero.powerstats.intelligence}</p>
                        </div>
                        <div className="details">
                            <label>Power</label>
                            <p>{hero.powerstats.power}</p>
                        </div>
                        <div className="details">
                            <label>Speed</label>
                            <p>{hero.powerstats.speed}</p>
                        </div>
                        <div className="details">
                            <label>Strength</label>
                            <p>{hero.powerstats.strength}</p>
                        </div>
                    </Section>
                </SectionContainer>
                
                <SectionContainer>
                    <h3>Appearance</h3>
                    <Section>
                        <div className="details">
                            <label>Gender</label>
                            <p>{hero.appearance.gender}</p>
                        </div>
                        <div className="details">
                            <label>Hair Color</label>
                            <p>{hero.appearance['hair-color']}</p>
                        </div>
                        <div className="details">
                            <label>Eye Color</label>
                            <p>{hero.appearance['eye-color']}</p>
                        </div>
                        <div className="details">
                            <label>Race</label>
                            <p>{hero.appearance.race}</p>
                        </div>
                        <div className="details">
                            <label>Height</label>
                            <p>{hero.appearance.height[1]}</p>
                        </div>
                        <div className="details">
                            <label>Weight</label>
                            <p>{hero.appearance.weight[1]}</p>
                        </div>
                    </Section>
                </SectionContainer>
                <SectionContainer>
                    <h3>Work</h3>
                    <Section>
                        <div className="details">
                            <label>Work Location</label>
                            <p>{hero.work.base}</p>
                        </div>
                        <div className="details">
                            <label>Occupation</label>
                            <p>{hero.work.occupation}</p>
                        </div>
                    </Section>
                </SectionContainer>
                <SectionContainer>
                    <h3>Connections</h3>
                    <Section>
                        <div className="details">
                            <label>Connections</label>
                            <p>{hero.connections['group-affiliation']}</p>
                        </div>
                        <div className="details">
                            <label>Relatives</label>
                            <p>{hero.connections.relatives}</p>
                        </div>
                    </Section>
                </SectionContainer>
                <Button backgroundColor='#FFE162' onClick={(e) => {
                    addFavorite(e, hero)
                }}>Add to Favorite</Button>
            </SuperheroStyled>
            )
        ))}
        </>
    );
}

export default Superhero;