import React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Col } from 'layout';

export default class EvolutionMethodDisplay extends React.Component {


    getDescription() {
        const { evolution } = this.props;
        if (evolution.evolution_method) {
            return "Lv. " + evolution.minimum_level;
        }
        return '';
    }

    render() {
        const { evolution } = this.props;
        return (
            <React.Fragment>
                <KeyboardArrowRightIcon />
                <div>
                    {evolution.evolution_method}
                </div>
                <div>
                    {this.getDescription()}
                </div>
            </React.Fragment>
        );
    }
}