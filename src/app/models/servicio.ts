import { Categoria } from "./categoria";
import { Direccion } from "./direccion";
import { Proveedor } from "./proveedor";
import { Telefono } from "./telefono";
import { TipoDocumento } from "./tipoDocumento";
import { Usuario } from "./usuario";

export class Servicio {

    categoria: Categoria[] = [];
    direccion: Direccion[] = [];
    nombreServicio: string = '';
    proveedor: Usuario = new Usuario;
}
