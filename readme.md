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
[x] Handle errors
    [x] Bad request
* Future work:
    [] Filter sensitive information during requests
    [] We can configure and create a lot o more tests
    [] Security: only logged user can make requests
    [] User a better architecture:
        * Model - Map python objects to database representation
        * View - Remove sensitive information for the user / validate API inputs
        * Repositories - Remove complex queries from controllers
    [] Handle errors
        [] Server is down

## Front end
[x] Design
[x] Implement pages
    [x] List users
    [x] User details
    [x] Create User
[] Put figma project on the readme
[x] Assign Product to Users
[x] Handle errors
[x] When submitting a new user, go to home page

* Future work:
    [] Unit test
    [] Loader while waiting for requests