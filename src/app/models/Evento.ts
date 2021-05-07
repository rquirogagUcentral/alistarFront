import { Telefono } from "./telefono";
import { TipoDocumento } from "./tipoDocumento";
import { Usuario } from "./usuario";
import { Orden } from "./Orden";

export class Evento {
  idEvento: number = 0;
  nombreEvento: string = '';
  fechaEvento : string = '';
  usuario: Usuario = new Usuario();
  orden: Array<Orden> = new Array<Orden>()

}
