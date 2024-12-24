import { FiguraGeometrica } from './FiguraGeometrica';

export class Circulo extends FiguraGeometrica {
  radio: number;

  constructor(radio: number) {
    super('Círculo');
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}
