import React from 'react';

type UserInfoProps = {
    attributeKeyUserFriendly: string;
    attributeValue: string;
    editable: boolean;
};
export const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
    return (
        <div className='border border-myGray-1 flex flex-col px-4 py-4 rounded-sm mr-5 mb-5'>
            <label className='text-myGreen-1'>{props.attributeKeyUserFriendly}</label>
            {props.editable &&
                <input type='text' value={props.attributeValue} className='text-gray-300' />}
            {!props.editable &&
                <span className='text-gray-300'>{props.attributeValue} </span>}
        </div>
    );
};
