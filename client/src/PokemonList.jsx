import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import PokemonPreview from 'PokemonPreview';

const PokemonList = (props) => {
    let { pokemon, display_types, loading } = props;

    if (loading) {
        return "LOADING";
    }

    return (
        <InfiniteScroll
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {
                pokemon.map(
                    (poke, i) => {
                        let display = false;
                        for (let i = 0; i < poke.types.length; i++) {
                            let type_id = poke.types[i].id;
                            if (display_types[type_id]) {
                                display = true;
                            }
                        }
                        return display && <PokemonPreview key={i} {...poke} />
                    }
                )
            }
        </InfiniteScroll>
    );
}

export default PokemonList;