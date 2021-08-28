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
    /**datos del usuario identificado */
    this.identity = this._sesionService.getIdentity();
  }

  login(): void { 
    console.log(this.usuario);
    this._sesionService.login(this.usuario).subscribe(
      response => {
        console.log('response'+ response)
        let identity = response
        this.identity = identity

        if (!this.identity.numeroIdentificacion) {
          alert('El usuario no existe')
        } else {
          localStorage.setItem('identity', JSON.stringify(identity))
          localStorage.setItem('nombreUsuario', this.identity.nombre)
          this._router.navigate(['typeUser']).then(data => {
            window.location.reload()
          })


        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          console.log('el error: ',error)
          alert('Falla en la autenticatición, Por favor Revise sus credenciales')
        }
      }
    );
  }

}
