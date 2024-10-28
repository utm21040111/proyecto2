import { Schema, model } from "mongoose";

const eventoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    metricas: [
        {
            descripcion: {
                type: String,
                required: true
            },
            max_points: {
                type: Number,
                required: true
            }
        }
    ],
    maximoRound: {
        type: Number,
        required: true
    },
    ronda: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ["pending", "active", "done"], // Only these options are allowed
        lowercase: true,
        required: true
    },
    equipos: [{
        type: Schema.Types.ObjectId,
        ref: 'equipos',  // Assuming 'equipos' is another collection
        required: true
    }],
    jueces: [{
        type: Schema.Types.ObjectId,
        ref: 'jueces',  // Assuming 'jueces' is another collection
        required: true
    }]
});

export const modelEvento = model("eventos", eventoSchema);
