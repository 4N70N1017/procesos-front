import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  inputData1: string = '';
  inputData2: string = '';
  inputData3: string = '';
  pids: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.startLoops().subscribe((data) => {
      this.inputData1 = data;
    });

    this.dataService.getIteration(1).subscribe((data) => {
      this.inputData2 = data;
    });

    this.dataService.getPIDs().subscribe((data) => {
      this.pids = data;
    });
  }
}
