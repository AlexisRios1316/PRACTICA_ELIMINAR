/* 
abstraccion
-usuarios
-Materias
-titulo
-instrucciones
-fecha de entrega
-hora de entrega
-puntos



*/
class task {
  usuario = [];
  materias = [];
  titulo = "";
  instrcciones = "";
  fechaEntregda = new Date();
  fechaCreacion = new Date();
  horaEntrega = new Date().getHours();
  puntos = 0;

  constructor(
    usuario = [],
    materias = [],
    titulo = "",
    instrcciones = "",
    fechaEntregda = "",
    fechaCreacion = "",
    horaEntrega = "",
    puntos = 0
  ) {
    this.titulo = titulo;
    this.usuario = usuario;
    this.materias = materias;
    this.instrcciones = instrcciones;
    this.fechaEntregda = fechaEntregda;
    this.fechaCreacion = fechaCreacion;
    this.puntos = puntos;
    this.horaEntrega = horaEntrega;
  }
}
// DECLARANDO UNA CLASE
const nuevaTarea = new task(
  [],
  [],
  "github",
  "Elaborar un repositorio",
  new Date("2023-01-18"),
  "12",
  1
);
