import { Schema, model } from "mongoose"

const eventoSchema = new Schema([
    {
        metricas: [
            {
                descripcion: {
                    type: String,
                    require: true
                },
                max_points: {
                    type: Number,
                    require: true
                }
            }
        ]
    }, {
        ronda: {
            type: Number,
            require: true
        }
    }, {
        estado: {
            type: String,
            enum: ["pending", "active", "done"], //Solo estas opciones existemn
            lowecase: true,
            require: true
        },
    }, {
        equipos: [{
            type:Schema.Types.ObjectId,
            require: true
    }]
    }, {
        jueces: [{
                type:Schema.Types.ObjectId,
                require: true
        }]
    }
]);

export const modelEvento = model("eventos", eventoSchema);