/// <reference types="cypress" />

import { usersPage } from '../common/pages';
import { createUserPage } from './pages';
import { createNewUserData } from '../common/testData';

describe('Create User', () => {
    before(() => {
        // go to home
        cy.visit('/');
    });

    it('user with valid inputs is created', () => {
        // button to go to new-user page
        cy.get(usersPage.create_user_button).click();

        // create mocked user
        const newUser = createNewUserData();

        // fill form
        cy.get(createUserPage.lastname).type(newUser.lastname);
        cy.get(createUserPage.firstname).type(newUser.firstname);
        cy.get(createUserPage.birth).type(newUser.birth);
        cy.get(createUserPage.gender).parent()
            .click()
            .get(`ul > li[data-value="${newUser.gender}"]`)
            .click();
        cy.get(createUserPage.housenumber).type(newUser.housenumber);
        cy.get(createUserPage.zipcode).type(newUser.zipcode);
        cy.get(createUserPage.streetname).type(newUser.streetname);
        cy.get(createUserPage.city).type(newUser.city);
        cy.get(createUserPage.mobilenumber).type(newUser.mobilenumber);
        cy.get(createUserPage.email).type(newUser.email);

        // submit user
        cy.get(createUserPage.submitUserButton).click();

        // check user is created
        cy.get(usersPage.lastRow_userName).should(
            'have.text',
            `${newUser.firstname} ${newUser.lastname}`,
        );
    });

    it('user with email that already exists', () => {
        // button to go to new-user page
        cy.get(usersPage.create_user_button).click();

        // create mocked user
        const newUser = createNewUserData();

        // fill form
        cy.get(createUserPage.lastname).type(newUser.lastname);
        cy.get(createUserPage.firstname).type(newUser.firstname);
        cy.get(createUserPage.birth).type(newUser.birth);
        cy.get(createUserPage.gender).parent()
            .click()
            .get(`ul > li[data-value="${newUser.gender}"]`)
            .click();
        cy.get(createUserPage.housenumber).type(newUser.housenumber);
        cy.get(createUserPage.zipcode).type(newUser.zipcode);
        cy.get(createUserPage.streetname).type(newUser.streetname);
        cy.get(createUserPage.city).type(newUser.city);
        cy.get(createUserPage.mobilenumber).type(newUser.mobilenumber);

        // this email was created during the initialization of the database
        // We should put this in an env var
        cy.get(createUserPage.email).type('luizhenriquefbb@gmail.com');

        // submit user
        cy.get(createUserPage.submitUserButton).click();

        // show toast of error
        cy.get(createUserPage.errorToast).should(
            'have.text',
            'User with email already exists',
        );
    });
});
