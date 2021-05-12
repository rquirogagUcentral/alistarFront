import { Component, OnInit } from '@angular/core';
import { service } from '../../mocks/mock-services';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  services = service;
  constructor() {
    `$('.datepicker').datepicker()`;
  }

  ngOnInit(): void {
  }

}
