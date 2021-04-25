import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  public usuario : Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }

  login():void
  {

  }

}
