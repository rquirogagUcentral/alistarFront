import { Component, OnInit } from '@angular/core';
import { service } from '../../mocks/mock-services';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  services = service;
  constructor() { }

  ngOnInit(): void {
  }

}
