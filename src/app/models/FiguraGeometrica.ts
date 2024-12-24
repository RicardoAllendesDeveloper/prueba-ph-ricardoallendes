export abstract class FiguraGeometrica {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract calcularPerimetro(): number;
  }
  