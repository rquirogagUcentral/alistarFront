import { Component, OnInit } from '@angular/core';
import { tipoDocumento } from '../../mocks/mock-tipoDoc';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tdocs = tipoDocumento;
  constructor() {
    console.log(this.tdocs);

   }

  ngOnInit(): void {
    this.tdocs = tipoDocumento;
    console.log(this.tdocs);
  }

}
