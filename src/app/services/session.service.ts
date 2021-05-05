import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaUsuario } from '../models/consultaUsuario';
import { GLOBAL  } from './global';
import { LocalStorageService } from './localStorage.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public identity: any
  public url: string

  constructor(
    private http:HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.url = GLOBAL.url
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
}


  public login(usuario: ConsultaUsuario): Observable<ConsultaUsuario>{

    let json = JSON.stringify(usuario)
    let params = json
    const path = `${this.url}/Usuarios/getUsuario-password`

    return this.http.post<ConsultaUsuario>(path, params, this.httpOptions)
  }

  /**Métodos para traer el usuario del local strage */
  getIdentity(): Observable<any> {
    return this.localStorageService.geDatosStorage('identity')
  }

}
