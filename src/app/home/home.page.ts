import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonGrid, IonRow, IonCol],
})

export class HomePage {
  display: string = '0';
  primeraOperacion: number | null = null;
  operacion: string | null = null;
  esperandoSegundaOperacion: boolean = false;

  // funcion para añadir los numeros
  anadirNumero(numero: string) {
    if (this.esperandoSegundaOperacion) {
      this.display = numero;
      this.esperandoSegundaOperacion = false;
    } else {
      this.display = this.display === '0' ? numero : this.display + numero;
    }
  }

  // funcion para la logica de las operaciones básicas
  ponerOperacion(opcion: string) {
    const inputValue = parseFloat(this.display);
    if (this.primeraOperacion === null) {
      this.primeraOperacion = inputValue;
    } else if (this.operacion) {
      const result = this.calcularResultado(this.primeraOperacion, inputValue, this.operacion);
      this.display = String(result);
      this.primeraOperacion = result;
    }
    this.operacion = opcion;
    this.esperandoSegundaOperacion = true;
  }

  // funcion para calcular las operaciones aritmeticas
  calcularResultado(primerNumero: number, segundoNumero: number, opcion: string): number {
    switch(opcion) {
      case '+': return primerNumero + segundoNumero;
      case '-': return primerNumero - segundoNumero;
      case '*': return primerNumero * segundoNumero;
      case '/': return segundoNumero !== 0 ? primerNumero / segundoNumero: 0;
      case '^': return Math.pow(primerNumero, segundoNumero);
      default: return segundoNumero;
    }
  }
  
  // funcion para calcular el valor trigonometrico y raiz
  operacionTrigonometrica(opcion: string) {
    const value = parseFloat(this.display);
    switch(opcion) {
      case 'sqrt': this.display = String(Math.sqrt(value));
        break;
      case 'sin': this.display = String(Math.sin(value));
        break;
      case 'cos': this.display = String(Math.cos(value));
        break;
      case 'tan': this.display = String(Math.tan(value));
        break;
    } 
    this.esperandoSegundaOperacion = true;
  }

  // funcion para calcular todas las operaciones
  calcular() {
    const inputValue = parseFloat(this.display);
    if(this.operacion && this.primeraOperacion !== null) {
      this.display = String(this.calcularResultado(this.primeraOperacion, inputValue, this.operacion));
      this.primeraOperacion = null;
      this.operacion = null;
      this.esperandoSegundaOperacion = true;
    }
  }

  // funcion para añadir el .
  anadirDecimal() {
    if (this.esperandoSegundaOperacion) {
      this.display = '0';
      this.esperandoSegundaOperacion = false;
      return;
    } else {
      if (!this.display.includes('.')) this.display += '.';
    }
  }

  // funcion para reiniciar el display
  limpiarDisplay() {
    this.display = '0';
    this.primeraOperacion = null;
    this.operacion = null;
  }

  // funcion para eliminar el ultimo digito
  eliminar() {
    this.display = this.display.length > 1 ? this.display.slice(0, -1): '0';
  }
} 

