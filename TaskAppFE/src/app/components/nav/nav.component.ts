import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  items: MenuItem[] | undefined;
    
  ngOnInit() {
      this.items = [
            {
              label: 'Inicio',
              items: [
                  {
                      label: 'Pagina principal',
                      icon: 'pi pi-home',
                      routerLink: ['/landing']
                  }
              ]
          },
          {
              label: 'Tareas',
              items: [
                  {
                      label: 'Crear Nueva',
                      icon: 'pi pi-plus',
                      routerLink: ['/new']
                  },
                  {
                      label: 'Actualizar Tarea',
                      icon: 'pi pi-refresh',
                      routerLink: ['/update']
                  },
                  {
                    label: 'Mostrar listado de Tareas',
                    icon: 'pi pi-list',
                    routerLink: ['/show']
                  }
              ]
          },
          {
              label: 'Extra',
              items: [
                  {
                    label: 'Configuración',
                    icon: 'pi pi-cog',
                    routerLink: ['/config']
                  }
              ]
          }
      ];
  }
}
