#! /bin/bash

action=$1
workspace=$2

case $action in
  build)
    yarn workspace $workspace build
    ;;
  install)
    yarn workspace $workspace install
    ;;
  start)
    yarn workspace $workspace start
    ;;
  test)
    yarn workspace $workspace test
    ;;
  *)
    echo "Unknown action: $action"
    exit 1
    ;;
esac
