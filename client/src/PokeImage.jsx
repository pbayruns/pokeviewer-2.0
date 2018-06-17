import React from 'react';


const PokeImage = (props) => {
    const { sugimori, id, identifier, className } = props;
    let URL = "https://s3.amazonaws.com/pokeviewer/pokemon/sprites/";
    URL += ( sugimori ) ? "sugimori/" : "default/";
    URL += id + ".png";
    let classes = " " + className + " pokemon-image";
    return (
        <img {...props} className={classes} src={URL} alt={identifier} />
    );
}

export default PokeImage;