#!/bin/bash

# storing cookies from login
curl -v \
  -c cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "",
    "password": ""
  }' \
  -X POST https://movielens.org/api/sessions \
  | python -mjson.tool

# search movies using the stored cookies
curl -v \
  -b cookies.txt \
  -X GET 'https://movielens.org/api/movies/1' \
  | python -mjson.tool

# log out
curl -v \
  -b cookies.txt \
  -X DELETE https://movielens.org/api/sessions/me \
  | python -mjson.tool
