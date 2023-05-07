// user registration
const createModule = async (req, res, next) => {
  //try {
  var db = req.db;
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
      responseCode: status,
    };

    res.statusCode = 200;

    console.log(sendData);

    res.setHeader("Content-Type", "application/json");
    res.send(sendData);
    res.end();
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true); // you
  let userData = req.body;
  console.log(userData);

  const params = [userData.title, userData.description];

  // Authenticate Registration

  //insert into table and send response

  const sql = `insert into  modules (Module, Description) VALUES("${params[0]}", "${params[1]}")`;
  let query = db.query(sql, userData, (err, result) => {
    if (err) {
      throw err;
    }
    getRegResponse(false, 1);
  });
};

const displayModule = async (req, res, next) => {
    try {
      var db = req.db;
      let sql = `SELECT * FROM modules`;
      let query = db.query(sql, (err, results) => {
        if (err) {
          throw err;
        }
        res.send(results);
      });
    } catch (error) {
      res.send({
        message: "An error occured",
      });
    }
  };

module.exports = { createModule, displayModule };
