import { Evento } from '../models/Evento';

export const evento : Evento [] =
[
  {
    idEvento : 1,
    nombreEvento : "Cumpleaños Danilo",
    fechaEvento : "Julio 10 , 2021 8 pm",
    usuario :
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
    },
    orden : [
      {
        idOrden : 1,
        servicio : 1,
        horario : 'julio 10 , 2021 8 pm',
        estado : {
          idEstado : 1,
          estado : 'Agendado'
        },
        valorTotal : 100
      },
      {
        idOrden : 2,
        servicio : 2,
        horario : 'julio 10 , 2021 8 pm',
        estado : {
          idEstado : 1,
          estado : 'Agendado'
        },
        valorTotal : 100000
      }
    ]
  },
  {
    idEvento : 2,
    nombreEvento : "Matrimonio Marcela",
    fechaEvento : "Ago 10 , 1991",
    usuario :
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
    },
    orden : [
      {
        idOrden : 1,
        servicio : 4,
        horario : 'julio 10 , 2021 8 pm',
        estado : {
          idEstado : 1,
          estado : 'Agendado'
        },
        valorTotal : 100
      }
    ]
  }

]
