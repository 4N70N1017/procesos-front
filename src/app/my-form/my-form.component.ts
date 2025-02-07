import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
  imports: [CommonModule], // Asegúrate de incluir CommonModule en los imports
})
export class MyFormComponent implements OnInit {
  message: string = '';
  iteration1: {
    iteration: number;
    threadId: string;
    pid: number;
    progress: number;
  } = { iteration: 0, threadId: '', pid: 0, progress: 0 };
  iteration2: {
    iteration: number;
    threadId: string;
    pid: number;
    progress: number;
  } = { iteration: 0, threadId: '', pid: 0, progress: 0 };
  iteration3: {
    iteration: number;
    threadId: string;
    pid: number;
    progress: number;
  } = { iteration: 0, threadId: '', pid: 0, progress: 0 };
  pids: number[] = [];
  readonly maxIterations = 10000000; // Máximo de iteraciones

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPIDs();
  }

  startLoops(): void {
    this.dataService.startLoops().subscribe((response) => {
      this.message = response.message;
    });
  }

  getIteration(loopNumber: number): void {
    this.dataService.getIteration(loopNumber).subscribe((response) => {
      if (loopNumber === 1) {
        this.iteration1 = {
          ...response,
          progress: this.calculateProgress(response.iteration),
        };
      } else if (loopNumber === 2) {
        this.iteration2 = {
          ...response,
          progress: this.calculateProgress(response.iteration),
        };
      } else if (loopNumber === 3) {
        this.iteration3 = {
          ...response,
          progress: this.calculateProgress(response.iteration),
        };
      }
    });
  }

  getPIDs(): void {
    this.dataService.getPIDs().subscribe((response) => {
      this.pids = response;
    });
  }

  private calculateProgress(iteration: number): number {
    return Math.min((iteration / this.maxIterations) * 100, 100);
  }
}
