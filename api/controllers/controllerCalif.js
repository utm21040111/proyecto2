//Crear calificaciones y retornarlas

import { modelEvento } from "../models/modelEventos";
import { modelCalif } from "../models/modelCalif";




export default {
    createCalif: async (req,res) => {
        try {
            const equipoId = req.params.equipoId;
            const equipos = await modelCalif.findById(equipoId);
            if (!equipos) {
                return res.status.json({msg:"Grupo no encontrado"})

            }
            
            const ronda = req.body.ronda;

            if (!ronda) {
                return res.status.json({msg:"La ronda no es valida"})
            }

            const eventoId = req.params.eventoId;
            const evento = await modelEvento.findById(eventoId);
            if (!evento) {
                return res.status.json({msg:"Evento no encontrado"})
            }

            if (!evento.groups.includes(equipoId)) {
                return res.status.json({msg:"No esta el grupo en este evento"})
            }

            //Validar que la ronda no tenga calificacion
            //Filtro para traer las calificaciones de este evento
            const gradesFromBd = await modelCalif.findOne({eventoId:evento._id, ronda:ronda, equipoId:equipos._id});
            gradesFromBd.grades.filter((grade)=>{
                grade.judgeID == req.body.judgeID;
            })

            //Calificacioes
            const grades = req.body.grades;


        } catch (error) {
            
        }
    }
}