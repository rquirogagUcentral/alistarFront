import { Component, OnInit } from '@angular/core';
import { proveedor }  from '../../mocks/mock-proveedores';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  cards = proveedor;

  constructor() { }

  ngOnInit(): void {
  }

}
