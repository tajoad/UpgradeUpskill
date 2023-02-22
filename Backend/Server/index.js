const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

const app = express();
app.use(cors());

//Create Database
app.get("/createdb", (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err) => {
        if(err) {
            throw err;
        }
        res.send("Database Created")
    })
})

//Create Table
app.get('/createemployee', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Employee table created');
    })
})


app.get('/register', (req, res) => {
    let sql = 'CREATE TABLE register(id int AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Table created');
    })
})


app.get('/system_users', (req, res) => {
    let sql = 'CREATE TABLE system_users(id int AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), username VARCHAR(255), pwd VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Table created');
    })
})



// select employees
app.get('/getusers', (req, res) => {
    const bcrypt = require('bcrypt');
    const sql = "select * from system_users where username = ?";
    const params = [username];
    let query = db.query(sql, params, (err, results) => {
        if (err) {

            callBack(err, false);

        } else {

            if (results.length == 0) {

                res.send("Invalid Username");

            } else {

                var hashedPassword = result[0].pwd;
                var response = bcrypt.compareSync(password, hashedPassword);

                if (response == false) {
                    res.send("Password Verification failed")
                } else {
                    res.send(results);
                }
            }
        }
        res.send(results);
    })
})

app.get('/getusers/:id', (req, res) => {
    let sql = `SELECT * FROM system_users WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        console.log(results);
        res.send(results);
    })
})

//update employee
app.get('/updateemployee/:id', (req,res) => {
    let newName = 'Updated name'
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,results) => {
        if(err) {
            throw err
        }
        res.send(results);
    })
})

app.get('/deleteemployee/:id', (req,res) => {
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
    let query = db.query(sql, err => {
        if(err){
            throw err;
        }
        res.send('Employee deleted');
    })
})

app.use(express.json());

app.post('/user', (req, res) => {

            // callback function
        const getRegResponse = (err, resp) => {

            let getRes;
            let status;

            if (err) {
                getRes = err.message;
                status = 0;

            } else {
                getRes = resp;
                status = 1;
            }

            const sendData = {
                responseMsg: getRes,
                responseCode: status
            }
            
            res.statusCode = 200;

            console.log(sendData);

            res.setHeader('Content-Type', 'application/json');
            res.send(sendData);
            res.end();
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true); // you 
        let userData = req.body;
       console.log(userData);
       const bcrypt = require('bcrypt');

       const passwordHash = bcrypt.hashSync(userData.password, 10);

       const params = [userData.firstName, userData.lastName, userData.email, userData.username, passwordHash];

       // Authenticate Registration

       if(userData.username && passwordHash)
            {
                query = `
                SELECT * FROM system_users 
                WHERE username = "${userData.username}"
                `;

                db.query(query, (error, result) => {
                    if (error) {

                        getRegResponse(error, false);
        
                    } else {
        
                        if (result.length > 0) {
                            console.log(result.length);
                            getRegResponse(new Error("You already have an account. Kindly Login"), null);
        
                        } else {
                            
                            //insert into table and send response

                            const sql = `insert into system_users (first_name, last_name, email, username, pwd) VALUES("${params[0]}", "${params[1]}", "${params[2]}", "${params[3]}", "${params[4]}")`;
                            let query = db.query(sql, userData, (err,result) => {
                             if(err) {
                                  throw err;
                             }
                             getRegResponse(false, "Registration Successful");

                         })
                        }
                    }
                });
            }

})

app.post('/login', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', true); // you 

    //Callback function

    const getResponse = (err, resp) => {

        let getRes;
        let status;
    
        if (err) {
            getRes = err.message;
            status = 0;
    
        } else {
            getRes = resp;
            status = 1;
    
        }

        const sendData = {
            responseMsg: getRes,
            responseCode: status
        }
    
        response.statusCode = 200;
    
        response.setHeader('Content-Type', 'application/json');
        response.send(sendData);
    }


   
    //login authentication
    let userData = request.body;
    
    const bcrypt = require('bcrypt');
    
    const passwordHash = bcrypt.hashSync(userData.password, 10);

    const params = [userData.username, userData.password];

    if(userData.username && passwordHash)
    {
        query = `
        SELECT * FROM system_users 
        WHERE username = "${userData.username}"
        `;

        db.query(query, (error, result) => {
            if (error) {

                getResponse(error, false);
  
            } else {
  
                if (result.length == 0) {
  
                    getResponse(new Error("Invalid username"), null);
  
                } else {
  
                    const hashedPassword = result[0].pwd;
                    const response = bcrypt.compareSync(userData.password, hashedPassword);
  
                    if (response == false) {
                        getResponse(new Error("Password verification failed"), null);
                    } else {
                        const welcomeString = result[0].id
                        getResponse(null, welcomeString);
                    }
                }
            }
            response.end();
        });
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }
});

app.listen('3002', () => {
    console.log('Server Started on port 3002');
})

