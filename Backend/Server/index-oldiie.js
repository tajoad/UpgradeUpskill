const express = require('express');
const cors = require('cors');

const database = require('./database');


const app = express();
app.use(cors());
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', session : req.session });
// });

app.post('/login', (request, response) => {
   
    let userData = request.body;
    console.log(userData);

    const username = request.body.username;

    const user_password = request.body.user_password;

    if(username && user_password)
    {
        query = `
        SELECT * FROM system_users 
        WHERE username = "${username}"
        `;

        database.query(query, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].user_password == user_password)
                    {
                        request.session.user_id = data[count].user_id;

                        response.redirect("/");
                    }
                    else
                    {
                        response.send('Incorrect Password');
                    }
                }
            }
            else
            {
                response.send('Incorrect Email Address');
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

// router.get('/logout', function(request, response, next){

//     request.session.destroy();

//     response.redirect("/");

// });

app.listen('3002', () => {
    console.log('Server Started on port 3002');
})

// module.exports = router;

