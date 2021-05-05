import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaUsuario } from 'src/app/models/consultaUsuario';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [SessionService]
})
export class SessionComponent implements OnInit {

  public usuario: ConsultaUsuario
  public identity: any
  public consulta: any

  constructor(
    private _sesionService: SessionService,
    private _router: Router,
  ) {
    this.usuario = new ConsultaUsuario()
  }

  ngOnInit(): void {
    /**datos del usuario identificado */
    this.identity = this._sesionService.getIdentity();
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
          this._router.navigate(['typeUser'])
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
