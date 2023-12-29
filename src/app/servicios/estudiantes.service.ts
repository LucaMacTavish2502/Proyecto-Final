import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private apiUrl = 'http://localhost/PHP/estudiantes.php';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getEstudianteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }

  getEstudianteByNombre(nombre: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?nombre=${nombre}`);
  }

  deleteEstudiantes(id:any): Observable<any>{
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  updateEstudiante(id:number,nuevoNombre:string): Observable<any> {
    return this.http.put(`${this.apiUrl}`,{idEstudiantes:id,esNombre:nuevoNombre});
  }

  insertEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`,data);
  }
}