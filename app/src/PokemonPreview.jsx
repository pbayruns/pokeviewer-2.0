import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from './routes.js';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TypeIcon from './TypeIcon';

export default class PokemonPreview extends React.Component {

    render() {

        let { types, id, order, identifier } = this.props;
        return (
            <Paper className="pokemon-card">
                <img src={"https://s3.amazonaws.com/pokeviewer/pokemon/dream-world/" + id + ".svg"} alt={identifier} />
                {identifier} #{order}
                {
                    types.map(
                        (type, i) => {
                            return <TypeIcon type={type} />;
                        }
                    )
                }
            </Paper>
        );
    }

}