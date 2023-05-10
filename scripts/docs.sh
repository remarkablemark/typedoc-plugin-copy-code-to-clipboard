#!/bin/bash

DOCS_DIRECTORY='docs'

npm run docs

# https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
if [[ $CF_PAGES == '1' ]]; then
  # https://community.cloudflare.com/t/functions-dir-is-ignored-in-deploy/438211
  # https://github.com/cloudflare/wrangler2/issues/2240#issuecomment-1343406897
  FUNCTIONS='functions/'
  RENAMED_FUNCTIONS='function/'
  FUNCTIONS_DIRECTORY="$DOCS_DIRECTORY/$FUNCTIONS"
  RENAMED_FUNCTIONS_DIRECTORY="$DOCS_DIRECTORY/$RENAMED_FUNCTIONS"

  mv $FUNCTIONS_DIRECTORY $RENAMED_FUNCTIONS_DIRECTORY

  if [[ $(uname) == 'Linux' ]]; then
    sed -i "s|$FUNCTIONS|$RENAMED_FUNCTIONS|g" $DOCS_DIRECTORY/*.html
    sed -i "s|$FUNCTIONS|$RENAMED_FUNCTIONS|g" $DOCS_DIRECTORY/assets/search.js
  elif [[ $(uname) == 'Darwin' ]]; then
    sed -i '' "s|$FUNCTIONS|$RENAMED_FUNCTIONS|g" $DOCS_DIRECTORY/*.html
    sed -i '' "s|$FUNCTIONS|$RENAMED_FUNCTIONS|g" $DOCS_DIRECTORY/assets/search.js
  fi

  echo "Renamed $FUNCTIONS_DIRECTORY to $RENAMED_FUNCTIONS_DIRECTORY"
fi
