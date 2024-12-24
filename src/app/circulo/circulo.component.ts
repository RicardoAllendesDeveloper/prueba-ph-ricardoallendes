import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Circulo } from '../models/Circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CirculoComponent {
  radio: number;
  perimetro: number;

  constructor(private alertController: AlertController) {
    this.radio = 0;
    this.perimetro = 0;
  }

  calcularPerimetro() {
    if (this.radio <= 0) {
      this.showAlert('Error', 'El radio debe ser mayor que cero.');
      return;
    }
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
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
