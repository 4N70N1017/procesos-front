import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/native'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  startLoops(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/startLoops`);
  }

  getIteration(loopNumber: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/iteration/${loopNumber}`);
  }

  getPIDs(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/pids`);
  }
}
