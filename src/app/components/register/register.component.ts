import { Component, OnInit } from '@angular/core';
import { TIPODOCUMENTO } from '../../mocks/mock-tipoDoc';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  docs=TIPODOCUMENTO;

  constructor() {
    console.log(this.docs);
    `$('.datepicker').datepicker()`;
    `$('.modal').modal()`;
    `$('select').formSelect()`;
   }

  ngOnInit(): void {



    console.log(this.docs);
  }

}
