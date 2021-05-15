import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/models/estado';
import { Evento } from 'src/app/models/Evento';
import { EventoOrden } from 'src/app/models/EventoPostOrden';
import { Orden } from 'src/app/models/Orden';
import { Servicio } from 'src/app/models/servicio';
import { Usuario } from 'src/app/models/usuario';
import { ServiciosGlobalesService } from 'src/app/services/servicios-globales.service';
import { service } from '../../mocks/mock-services';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  services = service;
  crearOrden: Orden = new Orden();
  listEstado: Estado[] = [];
  events:EventoOrden = new EventoOrden();
  servicioSeleccionado: Servicio = new Servicio();
  public usuario!: Usuario;

  constructor(private servicioGlobal: ServiciosGlobalesService) {
    console.log(this.servicioSeleccionado)
  }

  ngOnInit(): void {
    this.getListEstado();
  }

  createEvent() {
    this.crearOrden.servicio = this.servicioSeleccionado.idServicio
    console.log(this.crearOrden)
  }
  saveChanges() {
    console.log(this.servicioSeleccionado)
  }
  getListEstado() {
    this.servicioGlobal.getAllEstados().subscribe(data => {
      this.listEstado = data;
    })
  }

  onSubmit(f: NgForm) {
    let usuariolocal = localStorage.getItem('identity');
    this.usuario =JSON.parse(usuariolocal!);
    this.events.nombreEvento=f.value.nombreServicio;
    this.events.usuario = this.usuario.numeroIdentificacion;
    this.crearOrden.evento.push(this.events);
    this.crearOrden.servicio =this.servicioSeleccionado.idServicio;
    this.crearOrden.cantidad=1
    this.crearOrden.valorTotal =12321
    console.log("orden",this.crearOrden)
    console.log(f.valid);
    console.log(f.value);
    this.servicioGlobal.guardarOrden(this.crearOrden).subscribe(data=>{
      console.log(data);
    })
  }
}
