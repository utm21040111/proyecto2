
import { modelEquipos } from "../models/modelEquipos";
import { modelEvento } from "../models/modelEventos";

// Creacion dek equipos
export const crearEquipo = async (req, res) => {
    try {

        // Validacion del nombre del equipo sea alfaniumerico
        const regex = /^[a-zA-Z0-9-]+$/;
        if (!regex.test(req.body.name)) {
            return res.status(400).json({ message: "El nombre ingresdado debe contener solo caracteres alfanumerics" })
        }

        // validacion una longitud del nombre

        if (req.body.nombre.length < 3 || req.body.nombre.length > 15) {
            return res.status(400).json({ message: "El nombre asignado al equipo debe comprenderse entre 3 y 15 caracteres" })
        }

        // validacion que los miembros tipo entero
        if (!Array.isArray(req.body.participantesId) || !req.body.participantesId.every(id => typeof id === "number")) {
            return res.status(400).json({ message: "Los mimebros ingresados debe ser numero entero" })
        }

        // validacion que el equipo no sea mayor a 8 integrantes
        if (req.body.participantesId.length > 8) {
            return res.status(400).json({ message: "El maximo de integrantes por equipo es de 8" })
        }

        const equipo = {
            name: req.body.name,
            participantesId: req.body.participantesId,
            liderId: req.body.liderId
        }
        await modelEquipos.create(equipo)
        return res.status(201).json({ message: "El equipo ha sido creado correctamente" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "No se ha creado correctamente el equipos" })
    }
}




// Inscripcion al evento 
export const registrarEvento = async (req, res) => {

    // Validar que el evento exista
    const eventoId = req.params.id;
    const evento = await modelEvento.findById(eventoId);
    if (!evento) {
        return res.status(400).json({ message: "No existe el evento" })
    }

    try {
        const equipoId = req.params.id;
        const equipo = await modelEquipos.findById(equipoId);
        if (!equipo) {
            return res.status(404).json({ message: "No existe el equipo" })
        }

        const eventoId = req.params.eventoId;
        const evento = await modelEvento.findById(eventoId);
        if (!evento) {
            return res.status(404).json({ message: "No existe este evento" })
        }

        // Registrar al equipo al evento
        await modelEvento.findByIdAndUpdate(eventoId, {
            $push: {
                "equipos": equipoId
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "No se ha podido unir correctamente al evento" })
    }
}