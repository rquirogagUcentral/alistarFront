import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  public user : boolean;
  public usuario: any;
  public nombreUsuario:string;
  constructor(
    private _router: Router
  ) {
    this.user = false;
    this.nombreUsuario='';
    console.log(localStorage.getItem('identity'))
    if(localStorage.getItem('identity') != null || localStorage.getItem('identity') !=  undefined)
    {

      var u =localStorage.getItem('nombreSubarid')?"Cesar":""
      this.user=true;
      console.log(u)
      this.nombreUsuario=u
      console.log("Usuario de mas " + this.nombreUsuario);
    }

  }

  ngOnInit(): void {

  }

  cerrarCesion(){
    localStorage.removeItem('identity')
    this._router.navigate(['']).then(data=>{
      window.location.reload()
    })

  }

}
