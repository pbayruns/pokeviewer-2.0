import React from 'react';
import { Paper, Button, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import Autocomplete from 'Autocomplete';
import { Container } from 'layout';

export default class PokemonListFilterCard extends React.Component {

    renderCheckboxes() {
        let { types, display_types, loading, checkChanged } = this.props;

        if (loading) {
            return "";
        }
        let chx = [];
        for (let i = 0; i < types.length; i++) {
            let type = types[i];
            let checkbox = <Checkbox
                key={type.id}
                checked={display_types[type.id]}
                onChange={() => { checkChanged(type.id) }}
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
        let { display_types } = this.props;
        for (var id in display_types) {
            if (!display_types[id]) {
                return false;
            }
        }
        return true;
    }

    toggleAllTypesChecked = () => {
        let { display_types } = this.props;
        // If they are all checked, we want to set them to false, and vice versa
        let targetCheck = !this.allTypesChecked();
        for (var id in display_types) {
            this.props.checkChanged(id, targetCheck);
        }
    }

    render() {
        let { pokemon } = this.props;

        return (
            <Paper elevation={4} className="pokemon-list-filter-card">
                <React.Fragment>
                    <Autocomplete suggestions={pokemon} />
                    <Container>
                        <div className="checkboxes-container">
                            Filter by Types
                        {this.renderCheckboxes()}
                            <Button color="primary" onClick={this.toggleAllTypesChecked}>
                                {this.allTypesChecked() && "UNCHECK ALL"}
                                {!this.allTypesChecked() && "CHECK ALL"}
                            </Button>
                        </div>
                    </Container>
                </React.Fragment>
            </Paper>
        );
    }
}