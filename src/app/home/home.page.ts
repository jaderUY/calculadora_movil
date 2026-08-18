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
  anadirNumero(num: string) {
    if (this.esperandoSegundaOperacion) {
      this.display = num;
      this.esperandoSegundaOperacion = false;
    } else {
      this.display = this.display === '0' ? num : this.display + num;
    }
  }

  // funcion para la logica de las operaciones básicas
  ponerOperacion(op: string) {
    const inputValue = parseFloat(this.display);
    if (this.primeraOperacion === null) {
      this.primeraOperacion = inputValue;
    } else if (this.operacion) {
      const result = this.calcularResultado(this.primeraOperacion, inputValue, this.operacion);
      this.display = String(result);
      this.primeraOperacion = result;
    }
    this.operacion = op;
    this.esperandoSegundaOperacion = true;
  }

  // funcion para calcular las operaciones aritmeticas
  calcularResultado(first: number, second: number, op: string): number {
    switch(op) {
      case '+': return first + second;
      case '-': return first - second;
      case '*': return first * second;
      case '/': return second !== 0 ? first / second: 0;
      case '^': return Math.pow(first, second);
      default: return second;
    }
  }
  
  // funcion para calcular el valor trigonometrico y raiz
  operacionTrigonometrica(op: string) {
    const value = parseFloat(this.display);
    switch(op) {
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

