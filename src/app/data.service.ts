import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000/native';

  constructor(private http: HttpClient) {}

  startLoops(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.baseUrl}/start-loops`);
  }

  getIteration(loopNumber: number): Observable<{ iteration: number, threadId: string, pid: number }> {
    return this.http.get<{ iteration: number, threadId: string, pid: number }>(`${this.baseUrl}/iteration/${loopNumber}`);
  }

  getPIDs(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/pids`);
  }
}