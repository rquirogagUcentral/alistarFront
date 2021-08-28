import { Estado } from './estado';
import { Evento } from './Evento';
import { EventoOrden } from './EventoPostOrden';
import { Horario } from './Horario';
import { Servicio } from './servicio';

export class Orden {
  nombreEvento:String='';
  usuario: number = 0;
  idOrden: number = 0;
  horario: Horario = new Horario();
  estado: Estado = new Estado();
  precioTotal: number = 0.0;
  cantidad:number =0;
  evento:Array<Evento> = new Array<Evento>()
}
