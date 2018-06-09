import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from './routes.js';
import Paper from '@material-ui/core/Paper';
import TypeIcon from './TypeIcon';

export default class PokemonPreview extends React.Component {

    render() {

        let { types, id, order, identifier } = this.props;
        return (
            <Paper className="pokemon-card">
                <div className={"image-wrapper row type-" + types[0].identifier}>
                    <Link to={ROUTES.POKEMON_LIST.URL + id}>
                        <img src={"https://s3.amazonaws.com/pokeviewer/pokemon/dream-world/" + id + ".svg"} alt={identifier} />
                    </Link>
                </div>

                <span className="name"> {identifier} #{order} </span>
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