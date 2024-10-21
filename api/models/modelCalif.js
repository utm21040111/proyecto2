import { Schema, model } from "mongoose";

const califSchema = new Schema([
    {
        equipoId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        ronda: {
            type: Number,
            required: true
        },
        eventoId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        calificaciones: [
            {
                metricaId: {
                    type: Schema.Types.ObjectId,
                    required: true
                },
                calif: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
]);

export const modelCalif = model('calificaciones', califSchema);

