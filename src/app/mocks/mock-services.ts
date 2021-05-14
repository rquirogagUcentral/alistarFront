import { Servicio } from '../models/servicio';

export const service : Servicio [] =
[
  {
    categoria :
      {
        idCategoria : 1,
        nombreCategoria : 'Salas'
      }
    ,
    direccion :'AV 12 3 fake st',
    descripcionServicio:'prueba',
    imagenServicio:'adfasdfas',
    nombreServicio : 'Salas Imperial',
    proveedor :
    {
      numeroIdentificacion : 1,
      direccion : "calle 123",
      fechaNacimiento : "Jul 10 , 1991",
      nombre : "Carlos Gomez",
      password : "******",
      tipoDocumento :
      {
        tipoDocumento: 1,
        descripcionCorta: "C.C",
        descripcionLarga: "Cédula de Ciudadania"
      },
      telefono:
      {
        idTelefono : 1,
        telefono : "3007777777"
      },
      email : "rquirogag@ucentral.edu.co",
    }

  }
]
