import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
//import { LocalStorageService } from './localStorage.service'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: string

  constructor(
    private _http: HttpClient
    //private localStorageService: LocalStorageService
  )
  {
    this.url = environment.apiUrl
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
  }

  register(usuario: Usuario) {
    let json = JSON.stringify(usuario)
    let params = json
    const path = `${this.url}/Usuarios/save-usuario`
    return this._http.post<Usuario>(path, params, this.httpOptions)
  }

}
