import { Component, OnInit } from '@angular/core';
import { TIPODOCUMENTO } from '../../mocks/mock-tipoDoc';
import { TipoDocumento } from '../../models/tipoDocumento';
import { Usuario } from '../../models/usuario';
import { DropDownService } from 'src/app/services/drop-down.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public docs=TIPODOCUMENTO;
  public tDocs : TipoDocumento[];
  public usuario : Usuario;
  public identity : any;
  constructor(
    private dropdownService: DropDownService,
    private _usuarioService : UsuarioService
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
        console.log(this.identity);
        if(this.identity.mensaje=='OK')
        {
          alert("Usurio guardado");
          console.log(this.identity.mensaje);
          this.usuario.direccion=''
          this.usuario.email=''
          this.usuario.fechaNacimiento=''
          this.usuario.nombre=''
          this.usuario.password=''

        }

      }
    );
  }
}
