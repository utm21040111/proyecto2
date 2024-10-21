import { Schema, model } from "mongoose";

const usuarioSchema = new Schema([
    {
        nombre: {
            type: String,
            require: true
        }

    }, {
        mail: {
            type: String,
            require: true
        }
    }, {
        curp: {
            type: String,
            require: true
        }
    }, {
        rol: {
            type: String,
            require: true
        }
    }
])

export const modelUsuarios = model("usuarios", usuarioSchema)