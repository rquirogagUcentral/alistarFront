import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio as Service } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  servicioDetalle!: Service;
  servicioId!: Number;
  constructor(private _ServicioService: ServicioService,private route:ActivatedRoute) {
    if(this.route.snapshot.paramMap.get('id')!=null || this.route.snapshot.paramMap.get('id')!=undefined ){
      this.servicioId =Number( this.route.snapshot.paramMap.get('id'));
    }

  }

  ngOnInit(): void {
    this.seleccionServicio()
  }
  seleccionServicio(){
    this._ServicioService.servicioId(this.servicioId).subscribe(data=>{
      console.log(data)
      this.servicioDetalle = data;
    })
  }

}
