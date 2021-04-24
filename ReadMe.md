# Lenskart Test

# About

App built with React.
Node express Proxy Server used to fetch API data as http://139.59.244.121/my_items does not return `Access-Control-Allow-Origin: *` header.

# Instructions

## Install Dependencies

1. Run `cd client && npm i`
2. Run `cd proxy-server && npm i`

## Run Application

Run the following commands in separate terminal:

1. Start dev server for react app: `cd client && npm start`
2. Start proxy server: `cd proxy-server && npm start`

## Dev

For hot refresh on express server:
use `npm run dev` in proxy-server directory.

Testingp React Ap:
use `npm test` in client directory.
