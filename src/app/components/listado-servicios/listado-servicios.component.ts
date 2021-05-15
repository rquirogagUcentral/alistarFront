import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { Servicio as Service } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrls: ['./listado-servicios.component.css']
})
export class ListadoServiciosComponent implements OnInit {

   user : boolean | undefined;
   ListedService : Service[] =[] ;
  @Output() servicioSeleccionado =new EventEmitter<Service>();

  constructor( private _ServicioService: ServicioService) {

    if(localStorage.getItem('identity') != null || localStorage.getItem('identity') !=  undefined)
    {
        this.user=true
    }
   }

  ngOnInit(): void {
    this.getAllServicios();
  }
  getAllServicios(){
      this._ServicioService.listedServices().subscribe(data=>{
        this.ListedService =data;
      })
  }
  guardar(servicio : Service){
    console.log(servicio)
    this.servicioSeleccionado.emit(servicio);
  }
}
