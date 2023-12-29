import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit {
  estudiantesService: any;
actualizarEstadodeEstudiante() {
throw new Error('Method not implemented.');
}

  elID:any;
  formEstudiantes: FormGroup;
  
  constructor(
    public formulario:FormBuilder,
    private rutaactiva:ActivatedRoute,
    private router:Router,
    private http:HttpClient,
  ){
    this.formEstudiantes=this.formulario.group({
      esNombre:[''],
    });
  }
  
  ngOnInit(): void {
    this.elID=this.rutaactiva.snapshot.paramMap.get('id');
    this.formEstudiantes = this.formulario.group({
      esNombre: [''],
    });
  }

  actualizarCarrera():void{
    const idEstudiante = this.elID;
    const nuevoNombre=this.formEstudiantes.get('esNombre')?.value;

    this.estudiantesService.updateCarrera(idEstudiante,nuevoNombre)
    .subscribe(
      (respuesta: any) => {
        console.log('Modificación Correcta',respuesta);
        this.router.navigateByUrl('/listarcarreras');
      },
      (error: any)=>{
        console.error('Error',error);
      }
    );
  }
};

