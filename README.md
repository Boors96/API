# Mohammdia Print Web Service API
This is api is a part of Mohammedia Print Web Service project built with node js
# Steps
* Note :
make sure to enable https support in your rest api.
This sample express app, has https enabled already.

## Download & Build on local
### 1) Clone the repository and install node packages

``` 
git clone https://github.com/zowe/sample-node-api
cd api
npm install
npm run dev
```

### 2) database setup
Mohammdia Print Web Service is using relational database, you can import the database with phpmyadmin to your local server. you will find database file in db folder.

### 3) verify routes locally
Open your local browser and verify the Mohammadia Print Web Service API is working by accessing:     
`http://localhost:5000/create-order/`   
`http://localhost:5000/create-option/`   
`http://localhost:5000/deliver-order/`  

* Some URLs may not be working as expected that it requires a live server, as the email service.

