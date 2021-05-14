import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Usuario } from 'src/app/models/usuario';
import { DatosService } from 'src/app/services/datos.service';
import { DropDownService } from 'src/app/services/drop-down.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { SessionService } from 'src/app/services/session.service';
//import { Categoria } from '../../mocks/mock-categorias';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  //public cats = Categoria;
  public cats : Categoria[];
  public category: Categoria;
  public servicio : Servicio;
  public identity : any;
  public usuProveedor : Usuario;
  constructor(
    private dropdownService: DropDownService,
    private _ServicioService: ServicioService,
    private localStorageService: LocalStorageService,
    private _sessionService: SessionService,
    private _dataServices: DatosService
  ) {
    `$('.modal').modal()`;
    `$('select').formSelect()`;
    this.cats = new Array<Categoria>();
    this.category = new Categoria();
    this.servicio = new Servicio();
    this.usuProveedor = new Usuario();
  }

  ngOnInit(): void {
    //Captura de Categorias para mostrar en el formulario
    this.dropdownService.getCategory().subscribe(category => {
      this.cats = category
      })
    console.log(this.cats);

    //Inicializa el Local Storage
    this.usuProveedor = this._dataServices.getId()
    console.log(this.usuProveedor)
  }

  createService(): void
  {
    this.servicio.proveedor = JSON.parse(this._dataServices.getId())
    console.log(this.servicio.proveedor);
    console.log(this.servicio);
    this._ServicioService.createservice(this.servicio).subscribe(response =>{
      let identity = response
      this.identity = identity
    });

  }


}
