/* eslint-disable prefer-spread */
import { TableSortLabel, Tooltip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';

export const sortByColumns = {
    userName: 'FirstName',
};

const TableSort: React.FunctionComponent<{
    active: boolean,
    direction: 'asc' | 'desc',
    sortByColumn: string,
    onClick: (property: string) => void,
    children?: JSX.Element | string
}> = props => {
    const clickHandler = () => {
        props.onClick(props.sortByColumn);
    };
    return (
        <Tooltip title='Sort'>
            <TableSortLabel
                active={props.active}
                direction={props.direction}
                onClick={clickHandler}
            >
                {props.children}
            </TableSortLabel>
        </Tooltip>
    );
};

type Props = {
    elements: unknown[]
};

export const MyTable: React.FC<Props> = (props): JSX.Element => {
    const [sortOrderBy, setSortOrderBy] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('asc');

    const handleRequestSort = (property: string) => {
        const newSortOrderBy = property;
        let newSortOrder: 'desc' | 'asc' = sortOrder || 'desc';
        if (newSortOrderBy === property && sortOrder === 'desc') {
            newSortOrder = 'asc';
        }

        setSortOrderBy(newSortOrderBy);
        setSortOrder(newSortOrder);
    };

    return (
        <Table className='my-table'>
            <TableHead>
                <TableRow>
                    <TableCell style={{ paddingRight: '24px' }}>
                        <TableSort
                            active={sortOrderBy === sortByColumns.userName}
                            direction={sortOrder}
                            onClick={handleRequestSort}
                            sortByColumn={sortByColumns.userName}
                        >
                            Name
                        </TableSort>
                    </TableCell>
                    <TableCell style={{ paddingRight: '24px' }}>
                        House Number
                    </TableCell>
                    <TableCell style={{ paddingRight: '24px' }}>
                        Zip Code
                    </TableCell>
                    <TableCell style={{ paddingRight: '24px' }}>
                        Mobile Number
                    </TableCell>
                    <TableCell style={{ paddingRight: '24px' }}>
                        Email
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {Array.apply(null, Array(5)).map((_, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell style={{ paddingRight: '24px' }}>
                                Name 1
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                House Number 1
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                Zip Code 1
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                Mobile Number 1
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                Email 1
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
