#!/bin/bash
set -e

npm install

# mocked variables while we don't create them in AWS' SSM
export CYPRESS_BASE_URL="http://localhost:3000"

npm run cy
