import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form', // Asegúrate de que el selector sea correcto
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  onButton1Click() {
    console.log('Button 1 clicked');
  }

  onButton2Click() {
    console.log('Button 2 clicked');
  }

  onButton3Click() {
    console.log('Button 3 clicked');
  }
}
