package com.AppTask.toDoApp.modelo;

public class Task {
    private String id;
    private String description;
    private String status;
    private String[] dateRange;

    // Getters y setters para id
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // Getters y setters para description
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Getters y setters para status
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // Getters y setters para dateRange
    public String[] getDateRange() {
        return dateRange;
    }

    public void setDateRange(String[] dateRange) {
        this.dateRange = dateRange;
    }
}

