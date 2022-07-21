const model = require('./model');

const getData = (req, res) => {
  let queryString = 'select * from movies';
  model.getData(queryString, (err, result) => {
    if (err) {
      console.error(err);
      res.send(err).status(500);
    } else {
      res.send(result);
    }
  });
};
const postData = (req, res) => {
  let queryString = 'insert into movies (title, hasWatched, trailer, watchCount) values (?, ?, ?, ?)';
  console.log(req.body);
  let { title, trailer } = req.body;
  let data = [title, 0, trailer, 0];
  model.postData(queryString, data, (err, result) => {
    if (err) {
      console.error(err);
      res.send(err).status(500);
    } else {
      res.send(result).status(201);
    }
  });
};
const updateData = (req, res) => {
  let queryString = 'update movies set hasWatched = ?, watchCount = ?, trailer = ?, where id = ?';
  let { id, hasWatched, watchCount, trailer } = req.body;
  let data = [hasWatched, watchCount, trailer, id];
  model.updateData(queryString, data, (err, result) => {
    if (err) {
      console.error(err);
      res.send(err).status(500);
    } else {
      res.send(result).status(203);
    }
  });
};
const deleteData = (req, res) => {
  let queryString = 'delete from movies where id = ?';
  let { id } = req.body;
  let data = [id];
  model.deleteData(queryString, data, (err, result) => {
    if (err) {
      console.error(err);
      res.send(err).status(500);
    } else {
      res.send(result).status(204);
    }
  });
};

module.exports = { getData, postData, updateData, deleteData };