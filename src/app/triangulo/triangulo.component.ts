import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { TrianguloEscaleno } from '../models/TrianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class TrianguloComponent {
  ladoA: number;
  ladoB: number;
  ladoC: number;
  perimetro: number;

  constructor(private alertController: AlertController) {
    this.ladoA = 0;
    this.ladoB = 0;
    this.ladoC = 0;
    this.perimetro = 0;
  }

  calcularPerimetro() {
    if (this.ladoA <= 0 || this.ladoB <= 0 || this.ladoC <= 0) {
      this.showAlert('Error', 'Todos los lados deben ser mayores que cero.');
      return;
    }
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = triangulo.calcularPerimetro();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
