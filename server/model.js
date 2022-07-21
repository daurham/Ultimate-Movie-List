const db = require('./db');

const getData = (queryString, cb) => {
  db.query(queryString, cb);
};
const postData = (queryString, data, cb) => {
  db.query(queryString, data, cb);
};
const updateData = (queryString, data, cb) => {
  db.query(queryString, data, cb);
};
const deleteData = (queryString, data, cb) => {
  db.query(queryString, data, cb);
};

module.exports = { getData, postData, updateData, deleteData };