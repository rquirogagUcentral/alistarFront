import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { DatosService } from 'src/app/services/datos.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { service } from '../../mocks/mock-services';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-user-xserv',
  templateUrl: './user-xserv.component.html',
  styleUrls: ['./user-xserv.component.css']
})
export class UserXservComponent implements OnInit {

  services = service;
  usuId : number;
  servicios : Servicio[]=[];
  usuIdentity : Usuario;
  constructor(
    private _dataServices: DatosService,
    private _servXUser: ServicioService
  ) {
    this.servicios = new Array<Servicio>();
    this.usuIdentity = new Usuario();
    this.usuId = 0;
  }

  ngOnInit(): void {
    this.usuIdentity = JSON.parse(this._dataServices.getId())
    this.usuId = this.usuIdentity.numeroIdentificacion
    console.log(this.usuId)
    this._servXUser.getServicexUser(this.usuId).subscribe(response =>{
      this.servicios = response
    });
    

  }

}
