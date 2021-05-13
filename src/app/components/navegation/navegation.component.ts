import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  public user : boolean;
  constructor() {
    this.user = false;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('identity'))
    if(localStorage.getItem('identity') != null || localStorage.getItem('identity') !=  undefined)
    {
      this.user=true;
    }
  }

}
