import React from 'react';
import Sitebar from '../Sitebar';
import PokemonPreview from '../PokemonPreview';
import Autocomplete from '../Autocomplete';
import axios from 'axios';


import { Paper, Button, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

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


    componentDidMount(props) {

        let count = 0;
        axios.get('http://localhost:5000/types/').then(
            (response) => {
                let display_types = {};
                for (let i = 0; i < response.data.length; i++) {
                    let type = response.data[i];
                    display_types[type.id] = true;
                }
                count++;
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
                count++;
                this.setState({ pokemonLoading: false, pokemon: response.data });
            }
        )
    }

    checkChanged = id => event => {
        const display_types = this.state.display_types;
        display_types[id] = !display_types[id];
        this.setState({ display_types, checkbox_clicked: true });
    };

    renderCheckboxes() {
        let { types, display_types, typesLoading } = this.state;

        if (typesLoading) {
            return "";
        }

        let chx = [];
        for (let i = 0; i < types.length; i++) {
            let type = types[i];
            let checkbox = <Checkbox
                key={type.id}
                checked={display_types[type.id]}
                onChange={this.checkChanged(type.id)}
                value={type.identifer}
            />;
            let chkWithLabel = <FormControlLabel
                label={type.identifier}
                className={"type-label " + type.identifier}
                key={type.id}
                control={checkbox}
            />;
            chx.push(chkWithLabel);
        }
        return (
            <FormGroup row>
                {chx}
            </FormGroup>
        );
    }

    allTypesChecked = () => {
        let { display_types } = this.state;
        for (var id in display_types) {
            if (!display_types[id]) {
                return false;
            }
        }
        return true;
    }

    toggleAllTypesChecked = () => {
        // If they are all checked, we want to set them to the opposite
        let targetCheck = !this.allTypesChecked();
        const display_types = this.state.display_types;
        for (var id in display_types) {
            display_types[id] = targetCheck;
        }
        this.setState({ display_types });
    }

    render() {
        let { pokemon, pokemonLoading, typesLoading, types, display_types } = this.state;

        return (
            <React.Fragment>
                <Sitebar />
                <Paper elevation={4} className="pokemon-list-filter-card">
                    {!pokemonLoading && !typesLoading &&
                        <React.Fragment>
                            <Autocomplete suggestions={pokemon} />
                            <div className="container">
                                <div className="checkboxes-container">
                                    Filter by Types
                                {this.renderCheckboxes()}
                                    <Button color="primary" onClick={this.toggleAllTypesChecked}>
                                        {this.allTypesChecked() && "UNCHECK ALL"}
                                        {!this.allTypesChecked() && "CHECK ALL"}

                                    </Button>
                                </div>
                            </div>
                        </React.Fragment>
                    }

                </Paper>
                <div className="container">
                    {!pokemonLoading && pokemon.map(
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
                </div>

            </React.Fragment>
        );
    }

}