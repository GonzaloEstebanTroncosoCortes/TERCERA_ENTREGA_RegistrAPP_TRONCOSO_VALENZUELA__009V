
export interface RespuestaFeriados {
    status: string;
    data: Data[];
}

export interface Data {
    date: string;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}
//interface utilizada para get, put, delete
export interface Idocentes{
    id: number;
    username: string;
    correo: string;
    role: string;
    isactive: boolean;
    asignatura1: string;
    anno1: string;
    semestre1: string;
    horaTotal1: number;
    asignatura2: string;
    anno2: string;
    semestre2: string;
    horaTotal2: number;
    password: string;
    confirmarPassword: string;
}
//petición post
export interface Idocente{
    username: string;
    correo: string;
    role: string;
    isactive: boolean;
    asignatura1: string;
    anno1: string;
    semestre1: string;
    horaTotal1: number;
    asignatura2: string;
    anno2: string;
    semestre2: string;
    horaTotal2: number;
    password: string;
    confirmarPassword: string;
}

//inteface para alumnos get, put, delete
export interface Ialumnos{
    id: number;
    username: string;
    nombre: string;
    correo: string;
    role: string;
    isactive: boolean;
    carrera: string;
    sede: string;
    password: string;
    confirmarPassword: string;
}
//interface para alumnos post
export interface Ialumno{
    username: string;
    nombre: string;
    correo: string;
    role: string;
    isactive: boolean;
    carrera: string;
    sede: string;
    password: string;
    confirmarPassword: string;
}
//metodo post
export interface IasistenciaDocentes{
    id: number;
    username: string;
    asignatura: string;
    fecha: string;

}
export interface IasistenciaDocente{
    username: string;
    asignatura: string;
    fecha: string;

}
//metodo get
export interface UsersDocentes{
    id: number;
    username: string;
    correo: string;
    role: string;
    isactive: boolean;
    asignatura1: string;
    anno1: string;
    semestre1: string;
    horaTotal1: number;
    asignatura2: string;
    anno2: string;
    semestre2: string;
    horaTotal2: number;
    password: string;
    confirmarPassword: string;
}
//petición get
export interface Users{
    id: number;
    username: string;
    nombre: string;
    correo: string;
    role: string;
    isactive: boolean;
    carrera: string;
    sede: string;
    password: string;
    confirmarPassword: string;
}
//

export interface IasistenciaAlumnos{
    id: number;
    username: String;
    asignatura: String;
    fecha: String;

}
export interface IasistenciaAlumno{
    username: String;
    asignatura: String;
    fecha: String;

}
