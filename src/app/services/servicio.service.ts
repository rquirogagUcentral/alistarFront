import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public url: string

  constructor(
    private _http: HttpClient
  )
  {
    this.url = environment.apiUrl
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
  }

  createservice(servicio: Servicio)
  {
    let json = JSON.stringify(servicio)
    let params = json
    const path = `${this.url}/Servicio/save-Servicio`
    return this._http.post<Servicio>(path, params, this.httpOptions)
  }
}