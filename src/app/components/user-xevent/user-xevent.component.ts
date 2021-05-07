import { Component, OnInit } from '@angular/core';
import { evento } from '../../mocks/mock-eventxuser';


@Component({
  selector: 'app-user-xevent',
  templateUrl: './user-xevent.component.html',
  styleUrls: ['./user-xevent.component.css']
})
export class UserXEventComponent implements OnInit {

  eventos = evento;
  constructor() { }

  ngOnInit(): void {
  }

}
