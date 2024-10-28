
import { modelEvento } from "../models/modelEventos.js";

// Crearun evento
export const crearEvento = async (req, res) => {
    try {
        //Asegurar que metricas se almacenan en array para evitar erro
        const metricas = req.body.metricas || [];

        if (!Array.isArray(metricas) || metricas.length === 0) {
            return res.status(400).json({ message: "Se debe enviar un array con las metricas" });
        }

        // Validar que si contengan la descripciojn y puntuacion maxima
        const metricasIncompletas = metricas.filter(metrica => (!metrica.descripcion) || (metrica.max_points === undefined));
        if (metricasIncompletas.length > 0) {
            return res.status(400).json({ message: "Se deben enviar la descripcion y puntos maximos de la metrica del evento", metricasIncompletas });
        }

        // validar qu sean string 
        const metricasInvalidas = metricas.filter(metrica => typeof metrica.descripcion !== 'string' || metrica.descripcion.length === 0 || metrica.max_points <= 0);
        if (metricasInvalidas.length > 0) {
            return res.status(400).json({ message: "Las metricas enviadas no son validas", metricasInvalidas });
        }

        // Validacion de que la metrica no tiene puntos negativos 
        const metricasPuntosNegativos = metricas.filter(metrica => metrica.max_points < 0);
        if (metricasPuntosNegativos.length > 0) {
            return res.status(400).json({ message: "No se aceptan numeros negativos", metricasPuntosNegativos });
        }
        const evento = {
            nombre: req.body.nombre,
            metricas: metricas,
            maximoRound: req.body.maximoRound,
            ronda: req.body.ronda,
            estado: req.body.estado,
            equipos: req.body.equipos,
            jueces: req.body.jueces
        };

        await modelEvento.create(evento);
        res.status(201).json({ message: "El evento se ha creado correctamente", evento });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "El evento se ha creado incorrectamente", details: err.message });
    }
};
