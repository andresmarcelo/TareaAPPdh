import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { TableRowSelectEvent } from 'primeng/table';

@Component({
  selector: 'app-shw-task',
  templateUrl: './shw-task.component.html',
  styleUrl: './shw-task.component.css'
})
export class ShwTaskComponent {
  answers: string[]=[];
  selectedAnswers: string[]=[];

  selectedRow(event:TableRowSelectEvent){

  }

  tasks: any[] = [];
  selectedTasks: any[]=[];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}
