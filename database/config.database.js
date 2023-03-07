const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.URLDATABASE);
    console.log("BD Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar BD");
  }
};

module.exports = { dbConnection };
