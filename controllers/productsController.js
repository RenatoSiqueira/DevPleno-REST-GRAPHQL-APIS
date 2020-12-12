const getAll = (req, res) => {
  console.log("oi");
  res.send({
    success: true,
  });
};

const create = (req, res) => {
  res.send({
    success: true,
  });
};

module.exports = {
  getAll,
  create,
};
