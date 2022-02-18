
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  private nombre: string;
  private edad: number;

  constructor(sunombre: string, suedad: number) {
    this.nombre = sunombre;
    this.edad = suedad;
  }
  get Nombre(): string {
    return this.nombre;
  }
  set Nuevo_nombre(nuevoNombre:string) {
    this.nombre = nuevoNombre;
  }
}

let invitado: Persona = new Persona("Juan",24);

console.log(invitado.Nombre);
invitado.Nuevo_nombre = "Roberto";
console.log(invitado.Nombre);
