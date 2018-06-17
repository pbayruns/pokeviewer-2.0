import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import Paper from '@material-ui/core/Paper';
import TypeIcon from 'TypeIcon';
import PokeImage from 'PokeImage';

import { Row } from 'layout';

export default class PokemonPreview extends React.Component {

    render() {

        let { types, id, order, identifier } = this.props;
        return (
            <Paper className="pokemon-card">
                <Link to={routes.POKEMON_DETAIL.BASE_URL + id}>
                    <Row className={"image-wrapper type-" + types[0].identifier}>
                        <PokeImage id={id} identifier={identifier}/>
                    </Row>
                </Link>

                    <span className="name"> {identifier} <br /> #{order} </span>
                    {
                        types.map(
                            (type, i) => {
                                return <TypeIcon key={i} type={type} />;
                            }
                        )
                    }
            </Paper>
                );
            }
        
}