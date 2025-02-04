import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  message: string = '';
  iteration1: { iteration: number, threadId: string, pid: number } = { iteration: 0, threadId: '', pid: 0 };
  iteration2: { iteration: number, threadId: string, pid: number } = { iteration: 0, threadId: '', pid: 0 };
  iteration3: { iteration: number, threadId: string, pid: number } = { iteration: 0, threadId: '', pid: 0 };
  pids: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPIDs();
  }

  startLoops(): void {
    this.dataService.startLoops().subscribe(response => {
      this.message = response.message;
    });
  }

  getIteration(loopNumber: number): void {
    this.dataService.getIteration(loopNumber).subscribe(response => {
      if (loopNumber === 1) {
        this.iteration1 = response;
      } else if (loopNumber === 2) {
        this.iteration2 = response;
      } else if (loopNumber === 3) {
        this.iteration3 = response;
      }
    });
  }

  getPIDs(): void {
    this.dataService.getPIDs().subscribe(response => {
      this.pids = response;
    });
  }
}