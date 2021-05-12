import { Component, OnInit } from '@angular/core';
import {proveedor} from '../../mocks/mock-proveedores';

@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrls: ['./listado-servicios.component.css']
})
export class ListadoServiciosComponent implements OnInit {

  cards = proveedor;
  constructor() { }

  ngOnInit(): void {
  }

}
