import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarComponent } from './estudiantes/cargar/cargar.component';
import { EditarComponent } from './estudiantes/editar/editar.component';
import { ListarComponent } from './estudiantes/listar/listar.component';
import { HeaderComponent } from './componentes/header/header.component';

const routes: Routes = [
  {path: 'listarestudiantes',component:ListarComponent},
  {path: 'editarestudiantes',component:EditarComponent},
  {path: 'cargarestudiantes',component:CargarComponent},
  {path: 'mostrarestudiantes',component:ListarComponent},
  {path: 'añadirestudiantes',component:CargarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
