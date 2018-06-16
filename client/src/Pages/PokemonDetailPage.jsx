import React from 'react';
import Sitebar from 'Sitebar';
import API from 'util/apicall.js';

import TypeIcon from 'TypeIcon';
import AbilityDisplay from 'AbilityDisplay';

import { Row, Container } from 'layout';
import { LinearProgress, Paper } from '@material-ui/core';

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
                    <React.Fragment>
                        <Row>
                            <Paper depth={4}>
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
                            </Paper>

                        </Row>
                        <Row>
                            {poke.abilities &&
                                poke.abilities.map(
                                    (ability, i) => {
                                        return (
                                            <AbilityDisplay ability={ability} />
                                        );
                                    }
                                )
                            }
                        </Row>
                        {
                            poke.stats &&
                            poke.stats.map((stat, i) => {
                                return (<Row>{stat.identifier}<LinearProgress className={"stat-bar stat-" + stat.identifier} variant="determinate" value={(stat.base_stat / 150) * 100} /></Row>);
                            })
                        }
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }

}
