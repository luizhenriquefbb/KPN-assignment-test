import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import api from '../services/api';
import { TProduct, TUser  } from '../types';
import { UserInfo } from '../components/UserInfoProps';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

type RouteParams = { user_id: string };

const User: React.FC = () => {
    const { user_id } = useParams<RouteParams>();

    const [user, setUser] = useState<TUser>();
    const [products, setProducts] = useState<TProduct[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<TProduct|null>();
    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

    const getUser = async () => {
        const request = await api.get(`/api/user/${user_id}`);
        const userData: TUser = request.data;

        setUser(userData);
    };
    const getProducts = async () => {
        const request = await api.get('/api/product/list');
        setProducts(request.data);
    };

    useEffect(() => {
        getUser();
        getProducts();
    }, []);

    const closeDialog = () => {
        setDialogIsOpen(false);
        setSelectedProduct(null);
    };

    const openDialog = (product:TProduct) => {
        setDialogIsOpen(true);
        setSelectedProduct(product);
    };

    const linkProductAndUser = () => {
        api.post(
            `/api/user/${user?.id}/order-product`,
            {
                product_id: selectedProduct?.id
            }
        );

        closeDialog();

        // wait a little to give time to API process the sale and then fetch the user again
        setTimeout(() => {
            getUser();
        }, 3000);
    };

    return (<>
        <div className='flex flex-col min-h-screen'>

            <Header />
            <Main><>
                <h1>{user?.firstname} {user?.lastname}</h1>

                {
                    user &&
                    <div className='flex flex-wrap flex-auto items-start justify-between'>
                        <div id='user-details' className='px-5 py-6 mx-2 my-6 flex-grow'>
                            <h2>User Details</h2>

                            <div className='grid gap-4 grid-cols-2'>
                                <UserInfo
                                    attributeKeyUserFriendly={'First Name'}
                                    attributeValue={user.firstname}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Last Name'}
                                    attributeValue={user.lastname}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Birthday'}
                                    attributeValue={user.birth}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Gender'}
                                    attributeValue={user.gender.name}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'House Number'}
                                    attributeValue={user.housenumber}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Zip Code'}
                                    attributeValue={user.zipcode}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Street Name'}
                                    attributeValue={user.streetname}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'City'}
                                    attributeValue={user.city}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Mobile Number'}
                                    attributeValue={user.mobilenumber}
                                />
                                <UserInfo
                                    attributeKeyUserFriendly={'Email'}
                                    attributeValue={user.email}
                                />

                            </div>
                        </div>
                        <div id='purchased-products' className='px-5 py-8 mx-2 my-6 flex-grow'>
                            <h2>Purchased Products</h2>

                            {!user.products.length &&
                            <span className='text-red-600'>This customer does not have any product</span>
                            }

                            {user.products.map(product => {
                                return (
                                    <ul key={product.id}>
                                        <li className='text-gray-300 text-left'>{product.name}</li>
                                    </ul>
                                );
                            })}
                        </div>
                        <div id='available-products' className='px-5 py-8 mx-2 my-6 flex-grow'>
                            <h2>Available Products</h2>

                            {products.map(product => {
                                return (
                                    <ul key={product.id} onClick={() => openDialog(product)}>
                                        <li className='text-gray-300 text-left'>{product.name}</li>
                                    </ul>
                                );
                            })}
                        </div>

                    </div>
                }

            </></Main>

        </div>

        <Dialog
            open={dialogIsOpen}
            onClose={closeDialog}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>
                Confirmation of purchase
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    Are you sure you want to complete this sale?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button onClick={linkProductAndUser} autoFocus>
                    Yes, I&apos;m sure
                </Button>
            </DialogActions>
        </Dialog>
    </>);
};

export default User;