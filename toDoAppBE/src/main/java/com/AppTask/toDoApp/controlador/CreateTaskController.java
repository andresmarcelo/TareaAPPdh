package com.AppTask.toDoApp.controlador;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.AppTask.toDoApp.modelo.Task;
import com.AppTask.toDoApp.modelo.ApiResponse;

@RestController
@RequestMapping("/api")
public class CreateTaskController {
    private List<Task> tasks = new ArrayList<>();

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/crearTask")
    public ResponseEntity<ApiResponse> createTask(@RequestBody Task task) {
        tasks.add(task);
        ApiResponse response = new ApiResponse("Tarea creada con éxito");
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/consultarTask")
    public ResponseEntity<List<Task>> getTasks() {
        return ResponseEntity.ok(tasks);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/actualizarTask/{id}")
    public ResponseEntity<ApiResponse> updateTask(@PathVariable String id, @RequestBody Task updatedTask) {
        Optional<Task> existingTaskOpt = tasks.stream().filter(task -> task.getId().equals(id)).findFirst();
        if (existingTaskOpt.isPresent()) {
            Task existingTask = existingTaskOpt.get();
            existingTask.setDescription(updatedTask.getDescription());
            existingTask.setStatus(updatedTask.getStatus());
            existingTask.setDateRange(updatedTask.getDateRange());
            ApiResponse response = new ApiResponse("Tarea actualizada con éxito");
            return ResponseEntity.ok(response);
        } else {
            ApiResponse response = new ApiResponse("Tarea no encontrada");
            return ResponseEntity.status(404).body(response);
        }
    }
}
