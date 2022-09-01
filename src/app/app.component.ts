import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Promedio de edades';

  constructor(titulo:Title)
  {
    titulo.setTitle("Yaggi Gustavo");
  }
  edades: number[] = [];
  promedio: number | undefined;

  calcularPromedio(){
    this.promedio = this.edades.reduce((avg,edad,_,{length}) => {
      return avg + edad / length;
    },0);
  }

  resetear()
  {
    this.edades.length = 0;
    this.promedio = undefined;

  }

  mostrarPromedio()
  {
    if(
      this.edades.length >= 2 && this.edades.every(x => x > 0)){
        this.calcularPromedio();
      }else{
        alert("Edades invalidas. Ingrese dos enteros positivos");
      }
    
  }
}
