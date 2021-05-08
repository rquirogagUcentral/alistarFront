import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { SessionComponent } from './components/session/session.component';
import { RegisterComponent } from './components/register/register.component';
import { BannerComponent } from './components/banner/banner.component';
import { FinderComponent } from './components/finder/finder.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponenteInicialComponent } from './components/componente-inicial/componente-inicial.component';
import { FormsModule } from '@angular/forms';
import { TypeUserComponent } from './components/type-user/type-user.component';
import { UserXEventComponent } from './components/user-xevent/user-xevent.component';
import { UserXservComponent } from './components/user-xserv/user-xserv.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { ServDetailComponent } from './components/serv-detail/serv-detail.component';
import { ListadoServiciosComponent } from './components/listado-servicios/listado-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    SessionComponent,
    RegisterComponent,
    BannerComponent,
    FinderComponent,
    FooterComponent,
    ComponenteInicialComponent,
    TypeUserComponent,
    UserXEventComponent,
    UserXservComponent,
    EventDetailComponent,
    ServDetailComponent,
    ListadoServiciosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
