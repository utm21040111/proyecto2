
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
}




export const changeStatus = async(req,res)=> {
    try {
        
    } catch (error) {
        
    }
}

export const changeRound = async(req, res)=>{
    try {
        const eventoId = req.params.id;
        const evento = await modelEvento.findById(eventoId);
        if (!evento) {
            return res.status(400).json({msg:"No se ha encontrado el evento"})
        }
        const teamsPerRound = req.query.maxTeams ? req.query.maxTeams : 5;
        //Nos trae las calificaciones por grupo
        
        const {grupo} = evento;
        for (const grupo of groups) {
            const {grades} = await modelCalif.findById({eventoId: evento._id, grupoId: evento._id});
            //Calificar por metrica
            const alreadyCheked = [];
            for (const grade of grades) {
                const filteredGrades = grades.filter(item=>{grade.idMetric === item.idMetric && !alreadyCheked.includes(grade.idMetric)});
                console.log(filteredGrades);
                let gradePerMetric = 0 ;
                if (filteredGrades.length > 0) {
                    const gradePerMetric = filteredGrades.reduce((a,b)=>{a.grade = b.grade});    
                }
                
                if (!alreadyCheked.includes(grade.idMetric)) {
                    alreadyCheked.push(filteredGrades[0].idMetric)
                
                }
                
                console.log(gradePerMetric);   
            }
        } 
    } catch (error) {
        return res.status(500).json({msg:"Error al cambiar la ronda"})
    }
}