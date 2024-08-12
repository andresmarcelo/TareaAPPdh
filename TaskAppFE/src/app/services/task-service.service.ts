import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiBaseUrl = 'http://localhost:8080/api'; // Prefijo base para las URLs
  private postTasksUrl = `${this.apiBaseUrl}/crearTask`; // URL para postear una nueva tarea
  private getTasksUrl = `${this.apiBaseUrl}/consultarTask`;   // URL para obtener las tareas
  private updTaskUrl=`${this.apiBaseUrl}/actualizarTask`;   // URL para obtener las tareas

  constructor(private http: HttpClient) { }

  createTask(task: any): Observable<any> {
    console.log(this.postTasksUrl);
    return this.http.post<any>(this.postTasksUrl, task);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.getTasksUrl);
  }

  updTask(id: string, updatedTask: any): Observable<any> {
    return this.http.put<any>(`${this.updTaskUrl}/${id}`, updatedTask);
  }
}
