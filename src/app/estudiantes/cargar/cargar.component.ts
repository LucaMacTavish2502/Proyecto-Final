import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {
[x: string]: any;
  estudiantes={
    estNombre:'',
  }

  constructor(
    private router : Router,
    private cargarComponent:CargarComponent
  ){

  }

  agregarAlumno(){
    this.cargarComponent.insertEstudiante(this.estudiantes)
    .subscribe(
    (
      (data: any)=>{
        console.log("Se ha añadido un nuevo alumno correctamente");
        this.router.navigateByUrl('/mostrarestudiantes');
      },
      (error: any)=>{
        alert('Error al insertar el nuevo alumno');
      }
      )
    );
  }
  insertEstudiante(_estudiante: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }
}

function subscribe(arg0: any) {
  throw new Error('Function not implemented.');
}
