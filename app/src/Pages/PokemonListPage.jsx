import React from 'react';
import Sitebar from '../Sitebar';
import PokemonPreview from '../PokemonPreview';
import SearchCard from '../SearchCard';
import axios from 'axios';

export default class PokemonListPage extends React.Component {

    state = {
        loading: true,
        pokemon: {}
    };

    componentDidMount(props){

        axios.get('http://localhost:5000/pokemon/').then(
            (response) => {
                this.setState({loading: false, pokemon: response.data});
            }
        )
    }

    render(){

        let { pokemon, loading } = this.state;
        return (
            <React.Fragment>
                <Sitebar />
                <SearchCard />
                <div className="container">
                { !loading && pokemon.map(
                        (poke, i) => {
                            return <PokemonPreview key={i} {...poke} />
                      }
                    )
                }
                </div>

            </React.Fragment>
        );
    }

}

// <div id="wrapper">
// 	<div class="row justify-content-center">
// 		<h1 id="pokemon-list-title">All Pokemon</h1>
// 	</div>
// 	<div class="row justify-content-center">
// 			<button class="btn btn-default filter-button" data-filter="all">Clear Filters</button>
// 			<br>			
// 		{% for type in types %}
// 		<button class="btn btn-default filter-button type-display type-{{type.identifier}}" data-filter="{{type.identifier}}">{{type.identifier | upper}}</button>
// 		{% endfor %}
// 	</div>
// 	<div class="row justify-content-center">
// 		{% for poke in pokemon %}

// 		{% endfor %}
// 		</div>
// </div>