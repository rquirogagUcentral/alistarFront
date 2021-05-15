import { Estado } from './estado';
import { EventoOrden } from './EventoPostOrden';
import { Horario } from './Horario';

export class Orden {
  nombreServicio:String='';
  idOrden: number = 0;
  servicio: number = 0;
  horario: Horario = new Horario();
  estado: Estado = new Estado();
  valorTotal: number = 0.0;
  cantidad:number =0;
  evento:Array<EventoOrden> = new Array<EventoOrden>()
}
