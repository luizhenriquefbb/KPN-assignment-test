import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';

import { Users } from './pages/Users';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Users/>}/>
            <Route path='/user/:user_id' element={<User/>}/>
        </Routes>
    );
}