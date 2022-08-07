
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { MyTable } from '../components/Table';
import api from '../services/api';
import { TUser } from '../types';

export function Users() {

    const [users, setUsers] = useState<TUser[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const getAllUsers = async () => {
        const request = await api.get('/api/users/list');
        const users: TUser[] = request.data;

        setUsers(users);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const searchUser = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;

        setSearchQuery(value);

    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Main><>
                <h1>Users</h1>

                <div className='flex items-center'>
                    <div id='search_user' className='mr-7 min-w-[33%]'>
                        <input
                            type='text'
                            placeholder='Search user...'
                            className='bg-transparent w-full mt-8 mb-8'
                            onChange={evt => searchUser(evt)}/>
                    </div>

                    <Link to='new-user'>
                        <Button variant='outlined' className='button'>Create User</Button>
                    </Link>
                </div>

                <MyTable elements={users} searchQuery={searchQuery}/>

            </></Main>
        </div>
    );
}