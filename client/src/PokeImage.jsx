import React from 'react';


const PokeImage = (props) => {
    const { sugimori, id, identifier } = props;
    let URL = "https://s3.amazonaws.com/pokeviewer/pokemon/sprites/";
    URL += ( sugimori ) ? "sugimori/" : "default/";
    URL += id + ".png";
    return (
        <img {...props} className="pokemon-image" src={URL} alt={identifier} />

    );
}

export default PokeImage;