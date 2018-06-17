import React from 'react';
import PokeImage from 'PokeImage';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const EvolutionDisplay = (props) => {
    const { evolutions } = props;
    return evolutions.map(
        (evolution, i) => {
            return (
                <div>
                    {evolution.id &&
                        <React.Fragment>
                            <KeyboardArrowRightIcon />
                            {evolution.evolution_method}
                        </React.Fragment>
                    }
                    <PokeImage key={i} id={evolution.species_id} identifier={evolution.species_identifier} />
                </div>
            );
        }
    )
}

export default EvolutionDisplay;