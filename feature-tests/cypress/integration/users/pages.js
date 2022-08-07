/* eslint-disable import/prefer-default-export */
/**
 * This file will hold selectors and path to the HTML of the users page
 */

export const createUserPage = {
    lastname: ':nth-child(2) > .text-gray-300',
    firstname: ':nth-child(1) > .text-gray-300',
    birth: ':nth-child(3) > .text-gray-300',
    gender: '#gender-select',
    housenumber: ':nth-child(5) > .text-gray-300',
    zipcode: ':nth-child(6) > .text-gray-300',
    streetname: ':nth-child(7) > .text-gray-300',
    city: ':nth-child(8) > .text-gray-300',
    mobilenumber: ':nth-child(9) > .text-gray-300',
    email: ':nth-child(10) > .text-gray-300',

    errorToast: '.MuiPaper-root',
    submitUserButton: '.MuiButtonBase-root',
};
