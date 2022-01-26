# Mohammdia Print Web Service API
This is api is a part of Mohammedia Print Web Service project built with node js
# Steps
* Note :
make sure to enable https support in your rest api.
This sample express app, has https enabled already.

## Download & Build on local
### 1) Clone the repository, install node packages  and verify routes locally

``` 
//on local
git clone https://github.com/zowe/sample-node-api
cd api
npm install
npm run dev
```

## database setup
Mohammdia Print Web Service is using relational database, you can import the database with phpmyadmin to your local server. you will find database file in db folder.

## Test API

Open your local browser and verify the Mohammadia Print Web Service API is working by accessing:     
`http://localhost:18000/accounts/`   
`http://localhost:18000/accounts/1`   
`http://localhost:18000/accounts/1/cars/`  

* Some URLs may not be working as expected that it requires a live server, as the email service.

