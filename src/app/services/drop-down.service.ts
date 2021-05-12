import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TipoDocumento } from '../models/tipoDocumento';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  public url: string

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.apiUrl
  }

  getTipoDoc()
  {
    const path = `${this.url}/TiposDocumentos`

    return this.http.get<TipoDocumento[]>(path);
  }
}
