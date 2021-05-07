import { Estado } from './estado';

export class Orden {
  idOrden: number = 0;
  servicio: number = 0;
  horario: string = '';
  estado: Estado = new Estado();
  valorTotal: number = 0.0

}
