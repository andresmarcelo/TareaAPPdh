import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-crt-task',
  templateUrl: './crt-task.component.html',
  styleUrls: ['./crt-task.component.css']
})
export class CrtTaskComponent implements OnInit {
  taskForm: FormGroup;
  statusOptions = [ 'PARA HACER' , 'En Progreso', 'Hechas' ];

  constructor(private fb: FormBuilder, private taskService: TaskServiceService) { 
    this.taskForm = this.fb.group({
      id: [{ value: this.generateId(), disabled: true }], // Campo de ID no modificable
      description: ['', Validators.required],
      status: ['', Validators.required],
      dateRange: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // No es necesario volver a inicializar el formulario aquí
  }

  generateId(): string {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = ('0' + (now.getMonth() + 1)).slice(-2); // Meses de 0 a 11
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    return `${year}${month}${day}${hours}${minutes}`;
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      // Mostrar los valores del formulario en la consola
      console.log('Valores del formulario:', this.taskForm.getRawValue());

      // Generar el nuevo ID basado en la fecha y hora actuales
      const newId = this.generateId();

      // Habilitar el campo ID temporalmente para incluirlo en el envío
      this.taskForm.get('id')?.enable();
      this.taskForm.patchValue({ id: newId });
      const formValue = this.taskForm.value;
      this.taskForm.get('id')?.disable();

      this.taskService.createTask(formValue).subscribe(response => {
        console.log('Tarea creada exitosamente', response);
      }, error => {
        console.error('Error durante la creación de la tarea', error);
      });

      // Reiniciar el formulario con el nuevo ID
      this.taskForm.reset({
        id: { value: this.generateId(), disabled: true },
        description: '',
        status: '',
        dateRange: null
      });
    }
  }
}
