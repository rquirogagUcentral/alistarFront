import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { DropDownService } from 'src/app/services/drop-down.service';
import { ServicioService } from 'src/app/services/servicio.service';
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
  public servicio : Servicio;
  public identity : any;
  constructor(
    private dropdownService: DropDownService,
    private _ServicioService: ServicioService
  ) {
    `$('.modal').modal()`;
    `$('select').formSelect()`;
    this.cats = new Array<Categoria>();
    this.servicio = new Servicio();
  }

  ngOnInit(): void {
    this.dropdownService.getCategory().subscribe(category => {
      this.cats = category
      })

    console.log(this.cats);
  }

  createService(): void
  {
    console.log(this.servicio);
    this._ServicioService.createservice(this.servicio).subscribe(response =>{
      let identity = response
      this.identity = identity
    });

  }
}
