const { Schema, model } = require("mongoose");

const userSchema = Schema({
  // modelo de usuario
  nombre: {
    // propiedad del modelo (nombre)
    type: String, // tipo de dato
    required: [true, " El nombre es requerido"], // requerido(si o no, error si todo sale mal)
  },
  correo: {
    type: String,
    required: [true, "El correo es requerido"],
    unique: true, // el correo es unico, se define asi
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, "El rol es requerido"],
    enum: ["ADMIN_ROLE", "USER_ROLE"], // Para definir roles con enumm
  },
  estado: {
    type: Boolean,
    default: true, // definiendo valor por defecto
  },
  google: {
    // este campo define si el usuario fue o no creado por google
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", userSchema); // exportar el modelo de esta forma
