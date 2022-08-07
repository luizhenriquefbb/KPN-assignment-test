/* eslint-disable prefer-spread */
import { TableSortLabel, Tooltip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TUsers } from '../types';

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
    elements: TUsers[],
    searchQuery: string
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

    const elements = (props.elements);

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

                {elements.map(user => {
                    const userName = `${user.firstname} ${user.lastname}`;
                    const searchQuery = props.searchQuery.toLowerCase();
                    const mustRender = (
                        userName.toLowerCase().includes(searchQuery) ||
                        user.housenumber.toLowerCase().includes(searchQuery) ||
                        user.zipcode.toLowerCase().includes(searchQuery) ||
                        user.mobilenumber.toLowerCase().includes(searchQuery) ||
                        user.email.toLowerCase().includes(searchQuery)
                    );
                    return (
                        mustRender &&
                        <TableRow key={user.id}>
                            <Link to={`/user/${user.id}`}>
                                <TableCell style={{ paddingRight: '24px' }}>
                                    {user.firstname} {user.lastname}
                                </TableCell>
                            </Link>
                            <TableCell style={{ paddingRight: '24px' }}>
                                {user.housenumber}
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                {user.zipcode}
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                {user.mobilenumber}
                            </TableCell>
                            <TableCell style={{ paddingRight: '24px' }}>
                                {user.email}
                            </TableCell>
                        </TableRow>

                    );
                })}
            </TableBody>
        </Table>
    );
};
