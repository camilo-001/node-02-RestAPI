require("dotenv").config();
const express = require("express");
const { dbConnection } = require("../database/config.database");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Conexion a la base de datos
    this.connectDatabase();
    // Middlewares
    this.middlewares();
    // Rutas de la aplicacion
    this.routes();
  }

  async connectDatabase() {
    await dbConnection();
  }
  middlewares() {
    //parseo y lectura de body
    this.app.use(express.json());
    //directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use("/api/users", require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
