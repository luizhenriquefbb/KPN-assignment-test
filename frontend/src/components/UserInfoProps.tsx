import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useMemo, useState } from 'react';
import api from '../services/api';
import { TGender } from '../types';

type UserInfoProps = {
    attributeKeyUserFriendly: string;
    attributeValue: string;
};

type UpdateUserInfoProps = {
    attributeKeyUserFriendly: string;
    attributeValue: string;
    onchangeAction: (newValue:string) => void
    inputType: 'text' | 'date' | 'gender' | 'email' | 'phone'
};

export const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
    return (
        <div className='border border-myGray-1 flex flex-col px-4 py-4 rounded-sm mr-5 mb-5'>
            <label className='text-myGreen-1'>{props.attributeKeyUserFriendly}</label>

            <span className='text-gray-300'>{props.attributeValue} </span>
        </div>
    );
};

export const UpdateUserInfo: React.FC<UpdateUserInfoProps> = (props: UpdateUserInfoProps) => {

    const [availableGenders, setAvailableGenders] = useState<TGender[]>([]);

    const getGenders = async () => {
        const response = await api.get('/api/genders');
        setAvailableGenders(response.data);
    };

    if (props.inputType === 'gender') {
        useMemo(() => {
            getGenders();
        }, []);
    }

    return (
        <div className='border border-myGray-1 flex flex-col px-4 py-4 rounded-sm mr-5 mb-5'>
            <label className='text-myGreen-1'>{props.attributeKeyUserFriendly}</label>

            {
                props.inputType === 'text' &&
                <input
                    type='text'
                    value={props.attributeValue}
                    className='text-gray-300'
                    onChange={evt => props.onchangeAction(evt.target.value)}
                    required={true}
                />
            }

            {
                props.inputType === 'email' &&
                <input
                    type='email'
                    value={props.attributeValue}
                    className='text-gray-300'
                    onChange={evt => props.onchangeAction(evt.target.value)}
                    required={true}
                />
            }

            {
                props.inputType === 'phone' &&
                <input
                    type='tel'
                    value={props.attributeValue}
                    className='text-gray-300'
                    onChange={evt => props.onchangeAction(evt.target.value)}
                    required={true}
                />
            }

            {
                props.inputType === 'date' &&
                <input
                    type='date'
                    value={props.attributeValue}
                    className='text-gray-300'
                    onChange={evt => props.onchangeAction(evt.target.value)}
                    required={true}
                />
            }

            {
                props.inputType === 'gender' &&
                <FormControl fullWidth>
                    <Select
                        labelId='gender-select-label'
                        id='gender-select'
                        value={props.attributeValue}
                        label='Gender'
                        onChange={evt => props.onchangeAction(evt.target.value)}
                        required={true}
                    >
                        {availableGenders.map(gender => {
                            return (
                                <MenuItem key={gender.id} value={gender.id}>{gender.name}</MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            }

        </div>
    );
};
