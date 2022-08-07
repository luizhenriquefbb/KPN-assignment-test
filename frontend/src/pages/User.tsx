import React from 'react';
import { useParams } from 'react-router-dom';


interface UserProps {}

type RouteParams = { user_id: string }

const User: React.FC<UserProps> = (props: UserProps) => {
    const { user_id } = useParams<RouteParams>()
    return (<>
        <h2>{user_id}</h2>
    </>);
};

export default User;