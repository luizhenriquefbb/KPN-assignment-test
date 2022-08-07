#!/usr/bin/env sh

# Some colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

die() {
    error "$*" 1>&2
    exit 1
}

info() {
    echo -e "${GREEN}INFO${NC}: $1"
}

warn() {
    echo -e "${YELLOW}WARN${NC}: $1"
}

error() {
    echo -e "${RED}ERROR${NC}: $1"
}


# As long as there is more than one argument, iterate over all of them.
if [ $# -gt 0 ]; then
    if [ "$1" == "run" ]; then

        cd /api
        export FLASK_APP=app.py
        export FLASK_ENV=development
        python3 -m debugpy --listen "0.0.0.0:5678" -m flask run -h 0.0.0.0 -p 3001

    else
        die "Unrecognized arg $1"
    fi
else
    die "No arguments provided"
fi
