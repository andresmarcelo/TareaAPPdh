import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';

export interface tarea {
  id: string,
  description: string,
  status: string,
  dateRange: string[]
}

@Component({
  selector: 'app-upd-task',
  templateUrl: './upd-task.component.html',
  styleUrl: './upd-task.component.css'
})
export class UpdTaskComponent {
  tasks: any[] = [];
  selectedTasks!: tarea;
  statusOptions = ['PARA HACER', 'En Progreso', 'Hechas'];
  NEWvalue!: string;
  NEWstatus!:string;
  dateIni!: string ;
  dateFin!: string ;
  NEWtask!: tarea;

  constructor(private taskService: TaskServiceService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: tarea[]) => {
      this.tasks = data;
      console.log(this.tasks);
    });
    this.selectedTasks={id:'',description:'',status:'',dateRange:['','']};
    this.NEWtask={id:'',description:'',status:'',dateRange:['','']};
  }

  confirm() {
    console.log(this.NEWvalue, this.NEWstatus, this.dateIni, this.dateFin);
    this.NEWtask = {
      id: this.selectedTasks.id, // Asegúrate de que selectedTasks tenga al menos un elemento
      description: this.NEWvalue,
      status: this.NEWstatus,
      dateRange: [this.dateIni, this.dateFin]
    };
    console.log(this.NEWtask);
    this.confirmationService.confirm({
      header: 'Confirmacion',
      message: 'Por favor confirme para realizar el cambio.',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.taskService.updTask(this.NEWtask.id, this.NEWtask).subscribe(response => {
          this.messageService.add({ severity: 'info', summary: 'Comfirmado!', detail: 'Se guardaron los cambios.', life: 3000 });
          console.log("Cambios realizados", response);
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'No se pudieron guardar los cambios.', life: 3000 });
          console.error("Error al realizar los cambios", error);
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelado!', detail: 'Se desecharon los cambios.', life: 3000 });
        console.log("Cambios desechados");
      }
    });
  }
  

  buscaID(event: DropdownChangeEvent) {
    console.log(this.selectedTasks.id);
  }
}
