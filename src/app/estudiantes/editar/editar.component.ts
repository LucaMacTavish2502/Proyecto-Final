import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit {
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
      estNombre:[''],
    });
  }
  
  ngOnInit(): void {
    this.elID=this.rutaactiva.snapshot.paramMap.get('id');
    this.formEstudiantes = this.formulario.group({
      estNombre: [''],
    });
  }
};