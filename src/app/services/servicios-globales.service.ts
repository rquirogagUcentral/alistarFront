import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../models/estado';
import { Orden } from '../models/Orden';

@Injectable({
  providedIn: 'root'
})
export class ServiciosGlobalesService {

  constructor(private http: HttpClient) { }

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
}
