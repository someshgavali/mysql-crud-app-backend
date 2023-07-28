import connection from "./Connection/Connection.js";

const getAllUsers = (req, res) => {
  const SQLQuery = "SELECT * FROM usertable";
  connection.query(SQLQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });

  //   res.send("getUser");
};

const addNewUser = (req, res) => {
  //   res.send(req.body.name);
  const SQLQuery = `INSERT INTO usertable (name,email,number,address) values (?,?,?,?)`;
  connection.query(
    SQLQuery,
    [req.body.name, req.body.email, req.body.number, req.body.address],
    function (err, result) {
      if (err) throw err;
      console.log("1 record inserted", "sent", req.body, "received", result);
    }
  );
  res.send("addUser");
};

const updateUser = (req, res) => {
  const SQLQuery = `UPDATE usertable SET  ? WHERE id=${req.params.id}`;
  connection.query(SQLQuery, [req.body], function (err, result) {
    if (err) throw err;
    console.log("1 record updated", "sent", req.body);
  });
  //   res.send(`update user ${req.params.id}`);
};

const deleteUser = (req, res) => {
  //   res.send(req.body.name);
  const SQLQuery = `DELETE FROM usertable WHERE id = ${req.params.id}`;
  connection.query(SQLQuery, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted", "sent", req.body);
  });

  // res.send(`delete user ${req.params.id}`);
};

export { getAllUsers, addNewUser, updateUser, deleteUser };
