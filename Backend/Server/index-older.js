const http = require('http');
const url  = require("url");
const system_users = require('./system_users.js');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
  

const port = 3002;

const server = http.createServer(httpHandler);

server.listen(port, () => {
    console.log(`Server running at 3002`);
});

function httpHandler(req, res) {
    const b64AuthString = (req.headers.authorization || '').split(' ')[1] || '';
    const userCredentials = Buffer.from(b64AuthString, 'base64').toString();

    authString = userCredentials.split(":");

    const username = authString[0];
    const password = authString[1];

    const dg = new system_users();

    var pathname = url.parse(req.url).pathname;
    var resourcePath = pathname.split("/");

    var route = "";

    if (resourcePath.length >= 2) {
        route = resourcePath[1];
    }

    var jsonData = "";

    req.on('data', function (data) {
        jsonData += data;
    });

    req.on('end', function () {

        if (route == "register") {

            dg.createUser(jsonData, function(err, result) {

                if (err) {
                    callBack(err, null);
                } else {

                    console.log(result);

                    callBack(null, "The user # " + result.insertId + " was created successfully.");
                }
            });
        }

        if (route == "test_resource") {

            dg.verifyUser(username, password, function(err, result) {

                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                res.setHeader('Access-Control-Allow-Credentials', true); // you 

                if (err) {

                    callBack(err, null);

                } else {

                    const welcomeString = "Welcome, " + result[0].first_name + " " + result[0].last_name;

                    callBack(null, welcomeString);
                }

            });
      }
    });

    function callBack(err, resp){

        var response;

        if (err) {

            response = err.message;

        } else {

            response = resp;

        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        res.end(response + "\r\n");
    }
}