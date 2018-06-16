import React from 'react';
import {
    Table, TableBody, TableCell, TableHead, TablePagination,
    TableRow, TableSortLabel, Toolbar, Typography, Paper,
    Checkbox, IconButton, Tooltip, LinearProgress
} from '@material-ui/core';
import { DeleteIcon, FilterListIcon } from '@material-ui/icons';
import { lighten } from '@material-ui/core/styles/colorManipulator';

export default class StatsDisplay extends React.Component {

    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    getRows() {
        const { stats } = this.props;
        return stats.map((stat, i) => {
            const percent = (stat.base_stat / 150) * 100;
            const display = <LinearProgress className={"stat-bar stat-" + stat.identifier} variant="determinate" value={percent} />;
            return (
                <TableRow key={i}>
                    <TableCell>{stat.identifier}</TableCell>
                    <TableCell numeric>{stat.base_stat}</TableCell>
                    <TableCell className="bar-col">{display}</TableCell>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <Table className="stat-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Stat Name</TableCell>
                        <TableCell numeric>Base Stat</TableCell>
                        <TableCell className="bar-col"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.getRows()}
                </TableBody>
            </Table>
        );
    }
}