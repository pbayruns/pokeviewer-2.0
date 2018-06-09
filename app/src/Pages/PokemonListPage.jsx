import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes.js';
import Button from '@material-ui/core/Button';
import Sitebar from '../Sitebar';
import PokemonPreview from '../PokemonPreview';

export default class PokemonListPage extends React.Component {

    getPokemon(){
        const pokemon = {
            id: 1,
            order: 1,
            identifier: "Bulbasaur",
            types: [
                {
                    id: 1,
                    identifier: "grass"
                },
                {
                    id: 2,
                    identifier: "poison"
                }
            ]
        }
        let array = [];
        for(let i = 0; i < 25; i++){
            array.push(pokemon);
        }
        return array;
    }

    render(){

        return (
            <React.Fragment>
                <Sitebar />
                {
                    this.getPokemon().map(
                        (poke, i) => {
                            return <PokemonPreview {...poke} />
                      }
                    )
                }
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