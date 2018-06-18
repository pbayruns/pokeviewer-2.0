import React from 'react';
import Sitebar from 'Sitebar';
import API from 'util/apicall.js';

import { Row, Col } from 'layout';

export default class PokemonDetailPage extends React.Component {

    API = new API();
    constructor(props) {
        super(props);
        this.state = {
            ability_id: this.props.match.params.id,
            loaded: false,
            ability: {}
        };
    }

    componentDidMount() {
        this.API.abilities.get(this.state.ability_id).then(
            (response) => {
                this.setState({
                    ability: response.data[0],
                    loaded: true
                })
            }
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const currentID = nextProps.match.params.id;

            this.API.abilities.get(currentID).then(
                (response) => {
                    this.setState({
                        ability: response.data[0],
                        loaded: true,
                        ability_id: currentID,
                    })
                }
            )
        }
    }

    render() {
        let { ability, loaded } = this.state;
        return (
            <React.Fragment key={this.props.match.params.id}>
                <Sitebar />
                <Row centered>
                    <h1 className="capitalize">{ability.identifier}</h1>
                </Row>
                <Row centered>
                    <p>
                        {ability.effect}
                    </p>
                </Row>
                {JSON.stringify(ability)}
            </React.Fragment>
        );
    }

}
