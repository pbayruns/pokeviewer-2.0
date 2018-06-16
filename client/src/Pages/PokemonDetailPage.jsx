import React from 'react';
import Sitebar from 'Sitebar';
import API from 'util/apicall.js';

import TypeIcon from 'TypeIcon';
import AbilityDisplay from 'AbilityDisplay';
import StatsDisplay from 'StatsDisplay';

import { Row, Col } from 'layout';
import { Paper } from '@material-ui/core';

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
                        <Row centered>
                            <Col>
                                <img className="pokemon-image" src={"https://s3.amazonaws.com/pokeviewer/pokemon/" + poke.id + ".png"} alt={poke.identifier} />
                                <span className="name"> {poke.identifier} <br /> #{poke.order} </span>
                                <div>
                                    {poke.types.map((type, i) => { return <TypeIcon key={i} type={type} /> })}
                                </div>
                            </Col>
                            <Col>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Col>
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
                        <Row centered>
                            {poke.stats && <StatsDisplay stats={poke.stats} />}
                        </Row>

                    </React.Fragment>
                }
            </React.Fragment>
        );
    }

}
