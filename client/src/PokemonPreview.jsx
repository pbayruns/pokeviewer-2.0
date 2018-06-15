import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import Paper from '@material-ui/core/Paper';
import TypeIcon from 'TypeIcon';

export default class PokemonPreview extends React.Component {

    render() {

        let { types, id, order, identifier } = this.props;
        return (
            <Paper className="pokemon-card">
                <Link to={routes.POKEMON_DETAIL.BASE_URL + id}>
                    <div className={"image-wrapper row type-" + types[0].identifier}>
                        <img src={"https://s3.amazonaws.com/pokeviewer/pokemon/" + id + ".png"} alt={identifier} />
                    </div>
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