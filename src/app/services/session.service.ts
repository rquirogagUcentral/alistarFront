import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaUsuario } from '../models/consultaUsuario';
import { GLOBAL  } from './global';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public identity: any
  public url: string
  
  constructor(
    private http:HttpClient
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

  
}
