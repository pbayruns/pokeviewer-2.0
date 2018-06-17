import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import Paper from '@material-ui/core/Paper';


import PokeImage from 'PokeImage';
import TypesDisplay from 'TypesDisplay';

import { Row } from 'layout';

export default class PokemonPreview extends React.Component {

    render() {

        let { types, id, pokedex_number, identifier, highlight } = this.props;
        let classes = "pokemon-card ";
        classes += (highlight) ? "highlight " : "";

        return (
            <Paper className={classes}>
                <Link to={routes.POKEMON_DETAIL.BASE_URL + id}>
                    <Row className={"image-wrapper type-" + types[0].identifier}>
                        <PokeImage id={id} identifier={identifier}/>
                    </Row>
                </Link>

                    <span className="name"> {identifier} <br /> #{pokedex_number} </span>
                    <TypesDisplay centered types={types} />
            </Paper>
                );
            }
        
}