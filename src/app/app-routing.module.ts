import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarComponent } from './estudiantes/cargar/cargar.component';
import { EditarComponent } from './estudiantes/editar/editar.component';
import { ListarComponent } from './estudiantes/listar/listar.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
