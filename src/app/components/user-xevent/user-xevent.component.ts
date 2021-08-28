import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { DatosService } from 'src/app/services/datos.service';
import { ServiciosGlobalesService } from 'src/app/services/servicios-globales.service';
import { Orden } from '../../models/Orden';



@Component({
  selector: 'app-user-xevent',
  templateUrl: './user-xevent.component.html',
  styleUrls: ['./user-xevent.component.css']
})
export class UserXEventComponent implements OnInit {

  //eventos = evento;
  public ordenes: Orden[] = [];
  usuIdentity : Usuario;
  usuId : number = 0;
  constructor(
    private _globalservicios: ServiciosGlobalesService,
    private _dataServices: DatosService
  ) {
    this.ordenes = new Array<Orden>();
    this.usuIdentity = new Usuario();
   }

  ngOnInit(): void {
    this.funicionaparte();
  }

  funicionaparte(){
    this.usuIdentity = JSON.parse(this._dataServices.getId())
    this.usuId = this.usuIdentity.numeroIdentificacion
    console.log('usuario', this.usuIdentity)
    this._globalservicios.getAllOrdenByUsuaio(this.usuId).subscribe(response=>{
      this.ordenes = response
    });
    console.log('eventos', this.ordenes)
  }


}
