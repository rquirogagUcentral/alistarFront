import { Component, OnInit } from '@angular/core';
import { service } from '../../mocks/mock-services';

@Component({
  selector: 'app-user-xserv',
  templateUrl: './user-xserv.component.html',
  styleUrls: ['./user-xserv.component.css']
})
export class UserXservComponent implements OnInit {

  services = service;
  constructor() { }

  ngOnInit(): void {
  }

}
