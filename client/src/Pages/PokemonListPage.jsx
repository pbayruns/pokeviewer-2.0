import React from 'react';
import axios from 'axios';

import { Row } from 'layout';
import Sitebar from 'Sitebar';
import PokemonList from 'PokemonList';
import PokemonListFilterCard from 'PokemonListFilterCard';

export default class PokemonListPage extends React.Component {

    state = {
        pokemonLoading: true,
        pokemon: [],
        typesLoading: true,
        types: [],
        display_types: [],
        checkbox_clicked: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.pokemon.length !== this.state.pokemon.length)
            || (nextState.checkbox_clicked);
    }

    componentDidUpdate(prevProps) {
        this.setState({
            checkbox_clicked: false
        });
    }

    checkChanged = (id, value = undefined) => {
        const display_types = this.state.display_types;
        let targetVal = !display_types[id];
        if(value !== undefined){
            targetVal = value;
        }
        display_types[id] = targetVal;
        this.setState({ display_types, checkbox_clicked: true });
    };

    componentDidMount(props) {

        axios.get('http://localhost:5000/types/').then(
            (response) => {
                let display_types = {};
                for (let i = 0; i < response.data.length; i++) {
                    let type = response.data[i];
                    display_types[type.id] = true;
                }
                this.setState(
                    {
                        typesLoading: false,
                        types: response.data,
                        display_types: display_types
                    });
            }
        )
        axios.get('http://localhost:5000/pokemon/').then(
            (response) => {
                this.setState({ pokemonLoading: false, pokemon: response.data });
            }
        )
    }



    render() {
        let { pokemon, pokemonLoading, typesLoading, types, display_types } = this.state;

        return (
            <React.Fragment>
                <Sitebar />
                <PokemonListFilterCard
                    loading={pokemonLoading || typesLoading}
                    pokemon={pokemon}
                    display_types={display_types} 
                    types={types}
                    checkChanged={this.checkChanged}/>
                <Row wrap>
                        <PokemonList loading={pokemonLoading} pokemon={pokemon} display_types={display_types} />
                </Row>
            </React.Fragment>
        );
    }

}