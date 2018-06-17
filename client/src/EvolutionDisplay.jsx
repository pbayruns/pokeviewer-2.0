import React from 'react';

import { Row, Col } from 'layout';
import PokemonPreview from 'PokemonPreview';
import EvolutionMethodDisplay from 'EvolutionMethodDisplay';

const EvolutionDisplay = (props) => {
    const { evolutions, currentID } = props;
    return (
        <Col>
            <Row>
                <h2>Evolutions</h2>
            </Row>
            <Row>
                {
                    evolutions.map(
                        (evolution, i) => {
                            return (
                                <React.Fragment>
                                    <Col centered className="text-center">
                                        {evolution.id && <EvolutionMethodDisplay evolution={evolution} />}
                                    </Col>
                                    <Col className="evo-col">
                                        <PokemonPreview
                                            highlight={evolution.species_id == currentID}
                                            pokedex_number={evolution.pokedex_number}
                                            types={evolution.types}
                                            identifier={evolution.species_identifier}
                                            id={evolution.species_id} />
                                    </Col>
                                </React.Fragment>
                            );
                        }
                    )
                }
            </Row>
        </Col>
    );
}

export default EvolutionDisplay;