


import React from 'react';
import TypesDisplay from 'TypesDisplay';
import {
    Table, TableBody, TableCell, TableRow, List
} from '@material-ui/core';
import AbilityDisplay from './AbilityDisplay';

export default function PokeInfoTable(props) {
    let { poke } = props;

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>
                        <TypesDisplay types={poke.types} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Abilities</TableCell>
                    <TableCell >
                        {
                            poke.abilities.map(
                                (ability, i) =>
                                    <React.Fragment>
                                        <AbilityDisplay key={i} ability={ability} />
                                        <br/>
                                    </React.Fragment>
                            )
                        }
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell numeric>{poke.height / 10}m</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Weight</TableCell>
                    <TableCell numeric>{poke.weight / 10}kg</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Base Exp.</TableCell>
                    <TableCell numeric>{poke.base_experience}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Base Happiness</TableCell>
                    <TableCell numeric>{poke.base_happiness}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

// <Row>
// {poke.abilities &&
//     poke.abilities.map(
//         (ability, i) => {
//             return (
//                 <AbilityDisplay ability={ability} />
//             );
//         }
//     )
// }
// </Row>