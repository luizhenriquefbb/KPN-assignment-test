import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewProduct from './pages/NewProduct';
import NewUser from './pages/NewUser';
import User from './pages/User';

import { Users } from './pages/Users';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Users/>}/>
            <Route path='/user/:user_id' element={<User/>}/>
            <Route path='/new-user/' element={<NewUser/>}/>
            <Route path='/new-product/' element={<NewProduct />}/>
        </Routes>
    );
}