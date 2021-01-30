import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, AppRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { TenisComponent } from './tenis/tenis.component';
import { CursosComponent } from './cursos/cursos.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { VerempleadosComponent } from './components/verempleados/verempleados.component';
import { AgregarempleadoComponent } from './components/agregarempleado/agregarempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    TenisComponent,
    CursosComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    DashboardComponent,
    HomeComponent,
    VerempleadosComponent,
    AgregarempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
