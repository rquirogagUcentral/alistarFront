import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteInicialComponent } from './components/componente-inicial/componente-inicial.component';
import { RegisterComponent } from './components/register/register.component';
import { SessionComponent } from './components/session/session.component';
import { TypeUserComponent } from './components/type-user/type-user.component';


const routes: Routes = [
  {path: 'login', component: SessionComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',component:ComponenteInicialComponent},
  {path: 'typeUser', component: TypeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
