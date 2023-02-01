const userGet = (req, res) => {
  const params = req.query; // para poder usar los query params debemos
  res.json({
    msg: "get perra",
    params,
  });
};
const userPut = (req, res) => {
  const id = req.params.id; // sacando los parametros de la peticion
  res.json({
    msg: "put ",
    id,
  });
};

const userPost = (req, res) => {
  const body = req.body;
  res.json({
    msg: "post ",
    body,
  });
};

const userDelete = (req, res) => {
  res.json({
    msg: "delete ",
  });
};
module.exports = { userGet, userPost, userPut, userDelete };
