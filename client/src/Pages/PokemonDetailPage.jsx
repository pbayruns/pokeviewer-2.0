import React from 'react';
import Sitebar from '../Sitebar';
import API from '../util/apicall.js';

import TypeIcon from '../TypeIcon';
import AbilityDisplay from '../AbilityDisplay';

export default class PokemonDetailPage extends React.Component {

    API = new API();
    constructor(props) {
        super(props);
        this.state = {
            pokemon_id: this.props.match.params.id,
            pokemonLoaded: false,
            poke: {}
        };
    }

    componentDidMount() {
        this.API.pokemon.get(this.state.pokemon_id).then(
            (response) => {
                this.setState({
                    poke: response.data[0],
                    pokemonLoaded: true
                })
            }
        )
    }

    render() {
        let { poke, pokemonLoaded } = this.state;
        console.log(poke)
        return (
            <React.Fragment>
                <Sitebar />
                {pokemonLoaded &&
                    <div className="container">
                        <div className="row">
                            <div className="image-cropper">
                                <img src={"https://s3.amazonaws.com/pokeviewer/pokemon/" + poke.id + ".png"} alt={poke.identifier} />
                            </div>
                            <span className="name"> {poke.identifier} <br /> #{poke.order} </span>
                            {
                                poke.types.map(
                                    (type, i) => {
                                        return <TypeIcon key={i} type={type} />;
                                    }
                                )
                            }
                        </div>
                        <div className="row">
                            { poke.abilities &&
                                poke.abilities.map(
                                    (ability, i) => {
                                        return (
                                            <AbilityDisplay ability={ability} />
                                        );
                                    }
                                )
                            }
                        </div>

                    </div>
                }
            </React.Fragment>
        );
    }

}






//             {% set abilityLabel = "Ability" %} {% if abilities|length > 1 %} {% set abilityLabel = "Abilities" %} {% endif %}
//             <th scope="row">{{abilityLabel}}:</th>
//             <td>

//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Height:</th>
//             <td> {{height/10}} m</td>
//           </tr>
//           <tr>
//             <th scope="row">Weight:</th>
//             <td> {{weight/10}} kg</td>
//           </tr>
//           <tr>
//             <th scope="row">Base Exp:</th>
//             <td> {{base_experience}}</td>
//           </tr>

// <div class="row justify-content-center">
//   <h2>Base Stats</h2>
// </div>
// <div class="row justify-content-center">
//   <div class="col-xs-12 col-sm-10 col-md-8">
//     <div class="row justify-content-center">
//       {% set names = {"hp":"HP", "attack":"Atk", "defense":"Def", "special-attack":"Sp. Atk", "special-defense":"Sp. Def", "speed":"Speed"}
//       %} {% set colors = {"hp":"#ff0000", "attack":"#f08030", "defense":"#f8d030", "special-attack":"#6890f0", "special-defense":"#78c850",
//       "speed":"#f85888"} %} {% for stat in stats|sort %}

//       <div class="col-xs-4 col-md-3 col-lg-2">
//         <div class="card text-center stat-card">
//           <div class="card-block">
//             <h4 class="card-title" style="color:{{attribute(colors, stat.identifier)}};">{{attribute(names, stat.identifier)}}</h4>
//           </div>
//           <div class="card-img-bottom progress-circle" id="progress-{{stat.identifier}}" name="progress-{{stat.identifier}}"
//             data-label="{{stat.base_stat}}" data-value="{{stat.base_stat}}" data-color="{{attribute(colors, stat.identifier)}}"></div>
//         </div>
//       </div>
//       {% endfor %}
//     </div>
//   </div>
// </div>
// <div class="row justify-content-center">
//     <table class="table table-striped table-fit table-hover">		
//       <thead>		
//         <tr>		
//           <th>Lvl.</th>		
//           <th>Move</th>		
//           <th>Type</th>		
//           <th>Cat.</th>		
//           <th>Power</th>		
//           <th>Acc.</th>		
//           <th>Method</th>
//         </tr>		
//       </thead>		
//       <tbody>		
//         {% for move in moves %}		
//         <tr>		
//           <td>{{move.level}}</td>		
//           <td>		
//             <a href="/moves/{{move.id}}">{{move.identifier | title}}</a>		
//           </td>		
//           <td><a href="#">
//             <span class="type-display type-{{move.type}}">{{move.type | upper}}</span>
//           </a>
//         </td>		
//         <td>Special</td>	          
//         <td>{{move.power}}</td>	            
//         <td>{{move.accuracy}}</td>	  
//         <td>{{move.learn_method | title}}</td>          
//         </tr>		
//         {% endfor %}		
//       </tbody>		

//     </table>
//   </div>
// </div>
// </div>