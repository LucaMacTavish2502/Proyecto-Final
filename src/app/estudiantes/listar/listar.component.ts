import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from "@angular/router";
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  estudiantesService: any;
searchEstudiante() {
throw new Error('Method not implemented.');
}
estudiantes: any;
eliminarEstudiante(_t12: any) {
throw new Error('Method not implemented.');
}

  buscarEstudiante:string='';
  estudiante:any[]=[];
  getEstudiante: any;

  ngOnInit(): void {
    this.cargarTabla();
  }

  constructor( 
    private router:Router,
    private listarComponent: ListarComponent ){}

cargarTabla(){
  this.estudiantesService.getEstudiante().subscribe(
    (data: any[]) => {
      this.estudiante = data;
    },
    (error: any)=> {
      console.error('Error al cargar los datos del alumno',error);
    }
  )
}

eliminarEstudiantes(estudiante: any): void {
  if (confirm("¿Está seguro que desea eliminar a "+estudiante.esNombre+"?")) {
    this.estudiantesService.deleteEstudiante(estudiante.idEstudiantes).subscribe(
      (data: any) => {
        this.cargarTabla();
      },
      (error: any) => {
        console.error('Error al eliminar el estudiante', error);
      }
    );
  }
}
  deleteEstudiante(idEstudiantes: any) {
    throw new Error('Method not implemented.');
  }

searchEstudiantes():void{
  if(this.buscarEstudiante){
    this.estudiantesService.getEstudiantesByNombre(this.buscarEstudiante).subscribe(
      (data: any) => {
        this.estudiantes = data;
      },
      (error: any) => {
        console.error('Error al obtener el nombre del estudiante', error);
      }
    );
  }else{
    this.cargarTabla();
  }
}
  static getEstudiantesByNombre(buscarEstudiante: string) {
    throw new Error('Method not implemented.');
  }
  getEstudiantesByNombre(buscarEstudiante: string) {
    throw new Error('Method not implemented.');
  }
  buscarEstudiantes(buscarEstudiante: any) {
    throw new Error('Method not implemented.');
  }
  getEstudianteByNombre(buscarEstudiante: string) {
    throw new Error('Method not implemented.');
  }

}