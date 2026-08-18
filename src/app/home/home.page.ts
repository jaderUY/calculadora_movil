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
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand: boolean = false;

  // funcion para la logica de los numoros y decimales
  appendNumber(num: string) {
    if (this.waitingForSecondOperand) {
      this.display = num;
      this.waitingForSecondOperand = false;
    } else {
      this.display = this.display === '0' ? num : this.display + num;
    }
  }

  // funcion para la logica del punto
  appendDecimal() {
    if (this.waitingForSecondOperand) {
      this.display = '0';
      this.waitingForSecondOperand = false;
      return;
    } else {
      if (!this.display.includes('.')) this.display += '.';
    }
  }

  // duncion para la logica de las operaciones básicas
  setOperation(op: string) {
    const inputValue = parseFloat(this.display);
    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.calculateResult(this.firstOperand, inputValue, this.operator);
      this.display = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitingForSecondOperand = true;
  }
} 
