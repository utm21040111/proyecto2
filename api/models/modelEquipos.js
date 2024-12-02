import { Schema, model } from "mongoose";

const equipoSchema = new Schema([
    {
        nombre: {
            type: String,
            require: true
        }
    },
    {
        participantesId: []
    },
    /*{
       participantes: [{
           type: Schema.Types.ObjectId,
           required: true
       }]
   }, */
    {
        liderId: [{
            type: Schema.Types.ObjectId,
            required: true
        }]
    }
    , {
        ronda: {
            type: Number,
            required: true
        }
    }, {
        calificacoines: [{
            type: Schema.Types.ObjectId,
        }]
    }
])

export const modelEquipos = model("equipos", equipoSchema)