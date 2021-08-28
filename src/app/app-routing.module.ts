import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ComponenteInicialComponent } from './components/componente-inicial/componente-inicial.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { DetailEventComponent } from './components/detail-event/detail-event.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ListadoServiciosComponent } from './components/listado-servicios/listado-servicios.component';
import { RegisterComponent } from './components/register/register.component';
import { ServDetailComponent } from './components/serv-detail/serv-detail.component';
import { SessionComponent } from './components/session/session.component';
import { TypeUserComponent } from './components/type-user/type-user.component';
import { UserXEventComponent } from './components/user-xevent/user-xevent.component';
import { UserXservComponent } from './components/user-xserv/user-xserv.component';


const routes: Routes = [
  {path: 'login', component: SessionComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',component:ComponenteInicialComponent,},
  {path: 'typeUser', component: TypeUserComponent},
  {path: 'eventxUser', component: UserXEventComponent},
  {path: 'servxUser', component: UserXservComponent},
  {path: 'servxUser/serviceDetail', component: ServDetailComponent},
  {path: 'servicios', component: ListadoServiciosComponent},
  {path: 'verServicio/:id', component: DetalleServicioComponent},
  {path: 'eventxUser/createEvent/:id', component: CreateEventComponent},
  {path: 'eventxUser/createEvent', component: CreateEventComponent},
  {path: 'eventxUser/detailEvent', component: DetailEventComponent},
  {path: 'servxUser/addService', component: AddServiceComponent},
  {path: 'servxUser/createService', component: CreateServiceComponent},
  {path: 'getPassword', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
