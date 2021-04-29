import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaUsuario } from 'src/app/models/consultaUsuario';
import { ConsultaUsuarioResponse } from 'src/app/models/consultaUsuarioResponse';
import { SessionService } from 'src/app/services/session.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [SessionService]
})
export class SessionComponent implements OnInit {

  public usuario: ConsultaUsuario 
  public resUsuario: ConsultaUsuarioResponse
  public identity: any
  public consulta: any
  
  constructor(
    private _sesionService: SessionService,
    private _router: Router
  ) {
    this.usuario = new ConsultaUsuario()
    this.resUsuario = new ConsultaUsuarioResponse('')
   }

  ngOnInit(): void {
  }

  login():void
  {
    console.log(this.usuario);
    this._sesionService.login(this.usuario).subscribe(
      response => {
        let identity = response
        this.identity = identity
        if(!this.identity.numeroIdentificacion) {
          alert('El usuario no existe')
        } else {
          localStorage.setItem('identity', JSON.stringify(identity))
          this._router.navigate(['register'])
        }
      }, 
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          console.log(error)
        }
      }
    );
  }

}
