import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from '../../models/tipoDocumento';
import { Usuario } from '../../models/usuario';
import { DropDownService } from 'src/app/services/drop-down.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public tDocs : TipoDocumento[];
  public usuario : Usuario;
  public identity : any;
  constructor(
    private dropdownService: DropDownService,
    private _usuarioService : UsuarioService,
    private _router: Router
  ) {

    this.usuario = new Usuario();
    this.tDocs = new Array<TipoDocumento>();
   }

  ngOnInit(): void {

    this.dropdownService.getTipoDoc().subscribe(tipoDocs => {
      this.tDocs = tipoDocs
      })

    console.log(this.tDocs);
  }

  register(): void
  {
    console.log(this.usuario);
    this._usuarioService.register(this.usuario).subscribe(
      response => {
        let identity = response
        console.log(response)
        this.identity = identity
        this._router.navigate(['login'])
      }
    );
  }
}
