# SparrowConnected

Sparrow Connected Application. A practice application with three packages:

1. **API** using Typescript + MongoDB with Mongoose and Express
1. **Shared** is a Typescript shared types used in API and UI
1. **UI** a React JS with Typescript application using Material UI components

Requirements

1. Docker
1. Node JS (I'm using 14.17.6)

How to run the application

1. Install dependencies
   `npm i`
1. Create Mongo DB instances using docker by executing
   `npm run db-start `
1. Populate database
   `npm run db-populate`
1. Run the API and UI
   `npm run start`

###API
The api is running using express in port 1227, local url is: http://localhost:1221/api/post

###UI
The ui is runing on port 3000, loca url is: http://localhost:3000/
