import './Pokecard.css';

const IMG_LINK = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    let imgSrc = `${IMG_LINK}${props.id}.png`;

    return(
    <div className="Pokecard">
        <h2 className="Pokecard-title">{props.name}</h2>
        <img className="Pokecard-image" src={imgSrc} />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp} </div>
    </div>
    )
}

export default Pokecard;