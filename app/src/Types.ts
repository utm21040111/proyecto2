
interface IGrade {
    metricaId: string;
    calif: number;
    jueces: string;
  }
  export interface IGrades {
    equipoId: string;
    ronda: number;
    eventoId: string;
    calificaciones: IGrade[]
  }
  
  export interface ITeams {
    nombre: string;
    participantesId: string[];
    liderId: string;
    ronda: number;
    calificacoines: IGrades[]
  }
  
  
  export interface IUser {
    nombre: string;
    password: string;
    mail: string;
    curp: string;
    rol: string;
  }
  
  export interface IMetric {
    descripcion: string;
    max_points: number;
  }
  
  export interface IEvent {
    nombre: string;
    maximoRound: number;
    metricas: IMetric[];
  }