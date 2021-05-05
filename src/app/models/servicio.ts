import { Categotia } from "./categoria";
import { Direccion } from "./direccion";
import { Proveedor } from "./proveedor";
import { Telefono } from "./telefono";
import { TipoDocumento } from "./tipoDocumento";

export class Servicio {

    categoria: Categotia[] = [];
    direccion: Direccion[] = [];
    nombreServicio: string = '';
    proveedor: Proveedor = new Proveedor;
    telefonos: Telefono = new Telefono;
    tipoDocumento: TipoDocumento = new TipoDocumento;
}