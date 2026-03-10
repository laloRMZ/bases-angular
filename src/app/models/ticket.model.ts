export interface Ticket {

  id: number;

  titulo: string;

  descripcion: string;

  estado: 'PENDIENTE' | 'EN_PROGRESO' | 'REVISION' | 'FINALIZADO';

  prioridad: 'BAJA' | 'MEDIA' | 'ALTA';

  asignadoA: string;

  grupo: string;

  fechaCreacion: Date;

  fechaLimite: Date;

  comentarios: string[];

  historial: string[];

}