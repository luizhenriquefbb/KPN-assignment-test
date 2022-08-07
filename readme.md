# KPN Assignment test

[TODO: describe test]

# TODO

## Backend

[x] Create ERD of the database
[x] Init backend folder
[x] Init database with ORM (SQLAlchemy)
[x] Script to start the database
[] Backend Tests
[] Document installation process and how to run
[] Run in docker
[] User friendly errors
[x] Get user details
[x] Link user to product
* Future work:
    [] Filter sensitive information during requests
    [] We can configure and create a lot o more tests
    [] Security: only logged user can make requests
    [] User a better architecture:
        * Model - Map python objects to database representation
        * View - Remove sensitive information for the user
        * Repositories - Remove complex queries from controllers

## Front end
[x] Design
[] Implement pages
    [x] List users
    [x] User details
    [x] Create User
[] Put figma project on the readme
[] Handle errors

* Future work:
    [] Unit test