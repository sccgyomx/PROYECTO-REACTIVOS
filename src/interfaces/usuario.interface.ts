export interface Usuario {
    nombre: String,
    correoElectronico: String,
    contrasena: String,
    rol: 'Academico' | 'Colaborador Experto' | 'Estudiante' | 'Revisor'
}