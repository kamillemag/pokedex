import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
    let winMsg = null;
    if(props.isWinner) {
        winMsg = <p className="Pokedex-win">You Win!</p>;
    }
    
    return(
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                    />
                ))}
            </div>
            <h4>Total experience: {props.exp}</h4>
            {winMsg}
        </div>
    )
}

export default Pokedex;