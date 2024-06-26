//import de dependecias y archivos
const express = require('express');
const { connectDB } = require('./src/utils/database');
const routerMovie = require("./src/api/routes/movie.routes");
const routerUser = require("./src/api/routes/user.routes");
const env = require("dotenv");
env.config()// Nospermite trabajar con variables de entorno
const cors = require("cors")

// configuración del servidor
const server = express();
server.use(express.json());
connectDB();
server.use(cors())

// configuro el servidor con las rutas
server.use("/", routerMovie)
server.use("/user", routerUser)

//ejecucion del servidor
const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});


