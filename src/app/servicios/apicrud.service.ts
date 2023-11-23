import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idocente, Idocentes, IasistenciaDocente, IasistenciaDocentes } from '../pages/interfaces/interfaces';
import { Ialumno,Ialumnos } from '../pages/interfaces/interfaces';
import { IasistenciaAlumno, IasistenciaAlumnos } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  //PETICION GET
  constructor(private httpclient:HttpClient) { }
  listarDocentes():Observable<Idocentes>{
    return this.httpclient.get<Idocentes>(`${environment.apiUrl}/docentes`);
  }
  //PETICION POST
  CrearDocente(newDocente:Idocente):Observable<Idocente>{
    return this.httpclient.post<Idocentes>(`${environment.apiUrl}/docentes`,newDocente);
  }
//PETICION get
  listarAlumnos():Observable<Ialumnos>{
    return this.httpclient.get<Ialumnos>(`${environment.apiUrl}/alumnos`);
  }
  //PETICION POST
  CrearAlumno(newAlumno:Ialumno):Observable<Ialumno>{
    return this.httpclient.post<Ialumnos>(`${environment.apiUrl}/alumnos`,newAlumno);
  }

  CrearAsistenciaDocente(newAsistenciaDocente:IasistenciaDocente):Observable<IasistenciaDocente>{
    return this.httpclient.post<IasistenciaDocentes>(`${environment.apiUrl}/asistenciaDocentes`,newAsistenciaDocente);
  }
  CrearAsistenciaAlumno(newAsistenciaAlumno:IasistenciaAlumno):Observable<IasistenciaAlumno>{
    return this.httpclient.post<IasistenciaAlumnos>(`${environment.apiUrl}/asistenciaAlumnos`,newAsistenciaAlumno);
  }

}
