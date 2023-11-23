import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users,UsersDocentes } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, 
              private router: Router) { }

  // Obtener todos los usuarios
  GetAllUsers(): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/docentes`);
  }

  GetAllUsersDocentes(): Observable<UsersDocentes> {
    return this.httpClient.get<UsersDocentes>(`${environment.apiUrl}/docentes`);
  }

  GetUserByIdDocentes(codigo: any): Observable<UsersDocentes> {
    return this.httpClient.get<UsersDocentes>(`${environment.apiUrl}/docentes/?username=${codigo}`);
  }

  // Obtener un usuario por su código
  GetUserById(codigo: any): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/docentes/?username=${codigo}`);
  }

  // Verificar si el usuario está logueado
  EstaLogueado() {
    return sessionStorage.getItem('username') != null;
  }

  // Cerrar sesión
  logout() {
    // Limpiar la sesión
    sessionStorage.clear();
    // Redirigir al usuario al login
    this.router.navigate(['/login']);
  }

  //*****************para alumnos**********************************************************

  // Obtener todos los usuarios
  GetAllUsersAlumnos(): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/alumnos`);
  }
  // Obtener un usuario por su código
  GetUserByIdAlumnos(codigo: any): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/alumnos/?username=${codigo}`);
  }
//***************profesor */
  BuscarDocenteId(id:number): Observable<UsersDocentes> {
    return this.httpClient.get<UsersDocentes>(`${environment.apiUrl}/docentes/?id=${id}`);
  }

  ActualizarDocente(docente: any): Observable<UsersDocentes> {
    return this.httpClient.put<UsersDocentes>(`${environment.apiUrl}/docentes/${docente.id}`, docente);
  }
//***************alumno */
  BuscarAlumnoId(id:number): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/alumnos/?id=${id}`);
  }

  ActualizarAlumno(alumno: any): Observable<Users> {
    return this.httpClient.put<Users>(`${environment.apiUrl}/alumnos/${alumno.id}`, alumno);
  }
  //*****************para asistencia docente**********************************************************

  // Obtener todos los usuarios
  GetAllUsersAsistenciaDocentes(): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/asistenciaDocentes`);
  }
  // Obtener un usuario por su código
  GetUserByIdAsistenciaDocentes(codigo: any): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/asistenciaDocentes/?username=${codigo}`);
  }

  
}
