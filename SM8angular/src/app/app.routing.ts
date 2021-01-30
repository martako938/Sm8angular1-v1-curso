import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VerempleadosComponent } from './components/verempleados/verempleados.component';
import { AgregarempleadoComponent } from './components/agregarempleado/agregarempleado.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'verempleados', component: VerempleadosComponent},
    {path: 'agregaempleado', component: AgregarempleadoComponent}

];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);