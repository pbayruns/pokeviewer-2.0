import React from 'react';
import PokeImage from 'PokeImage';
import { KeyboardArrowRightIcon } from '@material-ui/icons';

const EvolutionDisplay = (props) => {
    const { evolutions } = props;
    return evolutions.map(
        (evolution, i) => {
            return (
                <div>
                    <KeyboardArrowRightIcon/>
                    {evolution.evolution_method}
                    <PokeImage key={i} id={evolution.species_id} identifier={evolution.species_identifier} />
                </div>
            );
        }
    )
}

export default EvolutionDisplay;