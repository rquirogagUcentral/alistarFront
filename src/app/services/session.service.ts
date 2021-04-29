import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaUsuario } from '../models/consultaUsuario';
import { GLOBAL  } from './global';
<<<<<<< HEAD
=======
import { LocalStorageService } from './localStorage.service';
>>>>>>> beb505baa708a065f7668e3bc6569f1770f99b0a

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public identity: any
  public url: string
  
  constructor(
<<<<<<< HEAD
    private http:HttpClient
=======
    private http:HttpClient,
    private localStorageService: LocalStorageService
>>>>>>> beb505baa708a065f7668e3bc6569f1770f99b0a
  ) { 
    this.url = GLOBAL.url   
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
}

<<<<<<< HEAD
  public login(usuario: ConsultaUsuario): Observable<ConsultaUsuario>{
=======
  public login(usuario: ConsultaUsuario){
>>>>>>> beb505baa708a065f7668e3bc6569f1770f99b0a
    let json = JSON.stringify(usuario)
    let params = json
    const path = `${this.url}/Usuarios/getUsuario-password`

<<<<<<< HEAD
    return this.http.post<ConsultaUsuario>(path, params, this.httpOptions)
  }

  
=======
    return this.http.post(path, params, this.httpOptions)
  }

  /**Métodos para traer el usuario del local strage */
  getIdentity(): Observable<any> {
    return this.localStorageService.geDatosStorage('identity')
  }
>>>>>>> beb505baa708a065f7668e3bc6569f1770f99b0a
}
