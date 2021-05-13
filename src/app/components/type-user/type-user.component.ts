import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-user',
  templateUrl: './type-user.component.html',
  styleUrls: ['./type-user.component.css']
})
export class TypeUserComponent implements OnInit {

  public user : boolean;
  public usuario: any;
  constructor() {

    this.user = false;
    console.log(localStorage.getItem('identity'))
    if(localStorage.getItem('identity') != null || localStorage.getItem('identity') !=  undefined)
    {
      var u =localStorage.getItem('identity')
      this.user=true;
      console.log(this.user)
      this.usuario=u
      console.log("Usuario de mas " + this.usuario)

    }else{

    }
   }

  ngOnInit(): void {
  }
  
}
