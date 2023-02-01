require("dotenv").config();
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
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
