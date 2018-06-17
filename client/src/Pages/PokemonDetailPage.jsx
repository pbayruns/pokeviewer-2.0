import React from 'react';
import Sitebar from 'Sitebar';
import API from 'util/apicall.js';

import AbilityDisplay from 'AbilityDisplay';
import StatsDisplay from 'StatsDisplay';
import EvolutionDisplay from 'EvolutionDisplay';
import PokeImage from 'PokeImage';
import PokeInfoTable from 'PokeInfoTable';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const currentID = nextProps.match.params.id;

            this.API.pokemon.get(currentID).then(
                (response) => {
                    this.setState({
                        poke: response.data[0],
                        pokemonLoaded: true,
                        pokemon_id: currentID,
                    })
                }
            )
        }
    }

    render() {
        let { poke, pokemonLoaded } = this.state;

        console.log(poke)
        return (
            <React.Fragment key={this.props.match.params.id}>
                <Sitebar />
                {pokemonLoaded &&
                    <React.Fragment>
                        <Row centered>
                            <h1 className="name"> {poke.identifier} - #{poke.order} </h1>
                        </Row>
                        <Row centered>
                            <Col padded>
                                <PokeImage className="detail-image" sugimori id={poke.id} identifier={poke.identifier} />
                            </Col>
                            <Col>
                                <PokeInfoTable poke={poke} />
                            </Col>
                        </Row>
                        <Row centered>
                            {poke.stats && <StatsDisplay stats={poke.stats} />}
                        </Row>

                        <Row padded centered bottom>
                            {poke.evolutions && <EvolutionDisplay currentID={this.state.pokemon_id} evolutions={poke.evolutions} />}
                        </Row>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }

}
