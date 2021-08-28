import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../models/estado';
import { getSessionToken } from '../models/getSessionToken';
import { Orden } from '../models/Orden';

@Injectable({
  providedIn: 'root'
})
export class ServiciosGlobalesService {

  public url: string
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllEstados():Observable<Estado[]>{
    return this.http.get<Estado[]>(environment.apiUrl+'/estado',this.httpOptions);
  }

  guardarOrden(orden:Orden):Observable<Orden>{
    return  this.http.post<Orden>(environment.apiUrl+'/Orden/save-Orden',orden,this.httpOptions);
  }

  getAllOrdenByUsuaio(idUsuario: number):Observable<Orden[]>{
    const path = `${this.url}/Orden/getIdUsuario?id=${idUsuario}`
    return this.http.get<Orden[]>(path,this.httpOptions);
  }

  getOrdernById(idOrden: number):Observable<Orden>
  {
    const path = `${this.url}/Orden/getIdOrden?id=${idOrden}`
    return this.http.get<Orden>(path,this.httpOptions);
  }

  getSessionToken(gstRequest: getSessionToken)
  {
    return this.http.post('https://test1.e-collect.com/app_express/api/getSessionToken',gstRequest,this.httpOptions);
  }
}
