import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import api from '../services/api';

const NewProduct: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        openDialog();
    };

    const closeDialog = () => {
        setDialogIsOpen(false);
    };

    const openDialog = () => {
        setDialogIsOpen(true);
    };

    const createProduct = () => {
        api.post(
            '/api/product',
            {
                name
            }
        );

        // wait a little to give time to API process the sale and then fetch the user again
        setTimeout(() => {
            navigate(-1);
        }, 3000);
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Main><>
                <h1>New Product</h1>

                <form onSubmit={onSubmit} className='flex flex-col flex-1 items-center'>
                    <div className='border border-myGray-1 flex flex-col px-4 py-4 rounded-sm mr-5 mb-5 w-[100%]'>
                        <label className='text-myGreen-1'>Product Name</label>

                        <input
                            type='text'
                            value={name}
                            className='text-gray-300]'
                            onChange={evt => setName(evt.target.value)}
                            required={true}
                        />
                    </div>

                    <Button variant='outlined' className='button max-w-md w-1/2' type='submit'>Submit</Button>

                </form>

            </></Main>

            <Dialog
                open={dialogIsOpen}
                onClose={closeDialog}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    Confirmation product creation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Are you sure you want to create this product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button onClick={createProduct} autoFocus>
                        Yes, I&apos;m sure
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

export default NewProduct;