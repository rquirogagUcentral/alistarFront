import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrls: ['./listado-servicios.component.css']
})
export class ListadoServiciosComponent implements OnInit {


   ListedService : Servicio[] =[] ;

  constructor( private _ServicioService: ServicioService) {
   }

  ngOnInit(): void {
    this.getAllServicios();
  }
  getAllServicios(){
      this._ServicioService.listedServices().subscribe(data=>{
      this.ListedService =data;
      })
  }
}
