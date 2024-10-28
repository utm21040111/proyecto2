import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { registrarUsuarios, login, actualizarPerfil } from './controllers/controllerUsuarios.js';
import { crearEvento } from './controllers/controllerEventos.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Conexion exitosa"));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("No funciona correctamente")
})

app.post("/usuario/registrarUsuarios", registrarUsuarios)
app.post("/usuario/login", login)
app.put("/usuario/:_id", actualizarPerfil)

app.post("/evento/crearEvento", crearEvento)

app.listen(4000, () => console.log("Funciona el servidor correctamente"))