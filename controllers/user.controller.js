const User = require("../models/usuarios.model");
const bcrypt = require("bcryptjs");

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

const userPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const user = new User({ nombre, correo, password, rol }); // esto solamente crea la instancia del modelo
  // Encriptar contraseña
  const salt = bcrypt.genSaltSync(); // para agregar los saltos que debe dar por defecto son 10
  user.password = bcrypt.hashSync(password, salt); // para encriptar en una sola via

  await user.save(); // el .save al usar la instancia user nos permite guardar lo que hemos enviado al modelo de User
  res.json({
    msg: "Usuario Añadido",
    correo,
  });
};

const userDelete = (req, res) => {
  res.json({
    msg: "delete ",
  });
};
module.exports = { userGet, userPost, userPut, userDelete };
