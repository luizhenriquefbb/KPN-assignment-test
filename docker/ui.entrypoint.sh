#!/bin/bash
set -e

# As long as there is more than one argument, iterate over all of them.
if [ $# -gt 0 ];then
    if [ "$1" == "test" ];then
        #starts the services for the visual tests
        #and runs the unit tests
        cd /app/mnt && echo "future work"

    # elif [ "$1" == "package" ];then
    #     #runs the build to
    #     #create the artifacts
    #     export PUBLIC_URL="./"
    #     cd /app/mnt && yarn lint && yarn build

    elif [ "$1" == "cleanup" ];then
        echo "updating permissions for cleanup"
        #added so that the jenkins job has permissions to clean up
        #all files and folders created in the build
        rm -rf /app/mnt/*/*
        chmod -R a+w .

     elif [ "$1" == "start" ];then
        echo "starting ui"
        export PUBLIC_URL="./"
        cd /app/mnt && npm install && npm run dev

    else
        echo "Unrecognized arg $1"
        # Exit with non 0 error code.
        exit 1
    fi
else
    echo "No arguments provided"
    exit 2
fi
