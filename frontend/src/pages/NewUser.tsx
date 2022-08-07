import { Alert, Button, Snackbar } from '@mui/material';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { UpdateUserInfo } from '../components/UserInfoProps';
import api from '../services/api';

const NewUser: React.FC = () => {

    const [lastname, setLastname] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [birth, setBirth] = useState<string>('');
    const [genderId, setGenderId] = useState<string>('');
    const [housenumber, setHousenumber] = useState<string>('');
    const [zipcode, setZipcode] = useState<string>('');
    const [streetname, setStreetname] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [mobilenumber, setMobilenumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [openSnackBar, setOpenSnackBar] = useState<string>('');

    const closeSnackBar = () => {
        setOpenSnackBar('');
    };

    const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        try {
            await api.post(
                'api/user',
                {
                    lastname,
                    firstname,
                    birth,
                    gender: genderId,
                    housenumber,
                    zipcode,
                    streetname,
                    city,
                    mobilenumber,
                    email,
                }
            );
        }
        catch (e) {
            const error = e as AxiosError;
            setOpenSnackBar(error.response?.data as string);
        }
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Main><>
                <h1>New User</h1>

                <form onSubmit={onSubmit} className='grid gap-4 grid-cols-2'>
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'First Name'}
                        attributeValue={firstname}
                        onchangeAction={setFirstname}
                        inputType='text'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Last Name'}
                        attributeValue={lastname}
                        onchangeAction={setLastname}
                        inputType='text'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Birthday'}
                        attributeValue={birth}
                        onchangeAction={setBirth}
                        inputType='date'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Gender'}
                        attributeValue={genderId}
                        onchangeAction={setGenderId}
                        inputType='gender'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'House Number'}
                        attributeValue={housenumber}
                        onchangeAction={setHousenumber}
                        inputType='text'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Zip Code'}
                        attributeValue={zipcode}
                        onchangeAction={setZipcode}
                        inputType='text'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Street Name'}
                        attributeValue={streetname}
                        onchangeAction={setStreetname}
                        inputType='text'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'City'}
                        attributeValue={city}
                        onchangeAction={setCity}
                        inputType='text'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Mobile Number'}
                        attributeValue={mobilenumber}
                        onchangeAction={setMobilenumber}
                        inputType='phone'
                    />
                    <UpdateUserInfo
                        attributeKeyUserFriendly={'Email'}
                        attributeValue={email}
                        onchangeAction={setEmail}
                        inputType='email'
                    />

                    <Button variant='outlined' className='button' type='submit'>Submit</Button>

                </form>

            </></Main>

            <Snackbar open={!!openSnackBar} autoHideDuration={6000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity='error' sx={{ width: '100%' }}>
                    {openSnackBar}
                </Alert>
            </Snackbar>
        </div>
    );

};

export default NewUser;