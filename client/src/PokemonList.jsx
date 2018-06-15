import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import PokemonPreview from 'PokemonPreview';

export default class PokemonList extends React.Component {

    state = {
        max: 50,
        hasMore: true
    }

    loadMore = () => {
        console.log("LOAD MORE")
        let { max } = this.state;
        let { pokemon } = this.props;
        let newMax = max + 50;

        this.setState({
            max: newMax,
            hasMore: pokemon.length > newMax
        });
    }


    render() {
        let { pokemon, display_types, loading } = this.props;
        let { max, hasMore } = this.state;

        if (loading) {
            return "LOADING";
        }

        return (
            <InfiniteScroll
                className="container"
                loadMore={this.loadMore}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {
                    pokemon.map(
                        (poke, i) => {
                            if (i > max) {
                                return undefined;
                            }
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

}