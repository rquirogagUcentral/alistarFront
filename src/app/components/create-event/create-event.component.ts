import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/Orden';
import { service } from '../../mocks/mock-services';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  services = service;
  crearOrden! :Orden;
  constructor() {

  }

  ngOnInit(): void {
  }

  createEvent()
  {

  }

}
