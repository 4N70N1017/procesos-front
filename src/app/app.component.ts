import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MyFormComponent],
})
export class AppComponent {
  title = 'frontend';
}
