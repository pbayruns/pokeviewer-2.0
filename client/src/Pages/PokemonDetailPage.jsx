import React from 'react';
import Sitebar from 'Sitebar';
import API from 'util/apicall.js';

import TypeIcon from 'TypeIcon';
import AbilityDisplay from 'AbilityDisplay';
import StatsDisplay from 'StatsDisplay';
import EvolutionDisplay from 'EvolutionDisplay';
import PokeImage from 'PokeImage';

import {
    Table, TableBody, TableCell, TableHead, TablePagination,
    TableRow, TableSortLabel, Toolbar, Typography, Paper,
    Checkbox, IconButton, Tooltip, LinearProgress
} from '@material-ui/core';
import { Row, Col } from 'layout';

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
                                <PokeImage id={poke.id} identifier={poke.identifier} />
                                <span className="name"> {poke.identifier} <br /> #{poke.order} </span>
                            </Col>
                            <Col>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Type</TableCell>
                                            <TableCell>
                                                {poke.types.map((type, i) => { return <TypeIcon key={i} type={type} /> })}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Height</TableCell>
                                            <TableCell numeric>{poke.height/10}m</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Weight</TableCell>
                                            <TableCell numeric>{poke.weight/10}kg</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Base Exp.</TableCell>
                                            <TableCell numeric>{poke.base_experience}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Base Happiness</TableCell>
                                            <TableCell numeric>{poke.base_happiness}</TableCell>
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

                        <Row centered>
                        { poke.evolutions && <EvolutionDisplay evolutions={poke.evolutions} /> }
                        </Row>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }

}
