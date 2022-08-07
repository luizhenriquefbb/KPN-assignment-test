# E2E Feature Tests

## Running tests

- Run dockers before start

- Go to feature-tests folder
```sh
cd feature-tests
```

1. Run the following command inside `feature-tests` folder to install Cypress and its dependencies in your machine.

```bash
npm install
```
> Note: Supported Node.js version 12 and above

> More information about Cypress environment variables: https://docs.cypress.io/guides/guides/environment-variables#Option-3-CYPRESS_

3. Run tests in command line mode
```bash
npm run test
```

4. Run tests using Cypress UI
```bash
npm run cy
```

Or you can use the a pre configured script
```sh
sudo chmod 777 run-cypress.sh
./run-cypress.sh
```
