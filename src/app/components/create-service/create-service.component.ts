import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../mocks/mock-categorias';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  public cats = Categoria;
  constructor() {
    `$('.modal').modal()`;
    `$('select').formSelect()`;
  }

  ngOnInit(): void {
  }

}
