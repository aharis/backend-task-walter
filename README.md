# backend-task-walter

Shoping List App
## Description and Features

The Shopping List app will provide following functions and features:

User is able to:

1. register
2. login
3. change his password
4. full CRUD operations for personal shopping lists
5. request shopping report for certain period in time

### Technologies

1.  Nodejs/Expres - backend
2.  MongoDB - database

### Used Backend Libraries

1. express
2. mongoose
3. crypto-js
4. dotenv
5. jsonwebtoken

#### How to clone, install and start the application

To get a local copy up and running follow these simple steps:

1. Clone the repository

https://github.com/aharis/backend-task-walter

2. Add your own .env file at the root folder with following variable:

- PORT="example_of_format" 
- DATABASE_NAME="example_of_format" 
- DATABASE_USER="example_of_format" 
- DATABASE_PASSWORD="example_of_format" 
- JWT_SECRET="example_of_format" 
- PASSWORD_SEC_MSG="example_of_format" 

3. Install NPM packages
4. npm start

##### Using the application

 1. Open Postman or any other API testing application.
 2. Setup authorization in Headers containing token that you will get in response when loged in.
- User example
- { "email":"someone@someone.com", "password":"password123" }

3. register new user by sending POST request to http://localhost:5000/user/register
4. login with your credentials with POST request to http://localhost:5000/user/login
5. change password by sending PUT request to http://localhost:5000/user/update/:id

- Products example
- { "listName": "List title example", "userId": "userid", "productList": [{"productName":"milk","quantity":3},productName":"sugar", "quantity":4}, {"productName":"flour", "quantity":1}] }

- create new list by sending POST request to http://localhost:5000/products/list
- update existing list with PUT request to http://localhost:5000/products/update/:id
- delete existing list with DELTE request to http://localhost:5000/products/delete/id
- get report by sending GET request to http://localhost:5000/products/stats
