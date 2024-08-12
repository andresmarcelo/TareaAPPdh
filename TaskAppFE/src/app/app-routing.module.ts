import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { ManagePortalComponent } from './components/manage-portal/manage-portal.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrtTaskComponent } from './components/crt-task/crt-task.component';
import { UpdTaskComponent } from './components/upd-task/upd-task.component';
import { ShwTaskComponent } from './components/shw-task/shw-task.component';
import { CnfTaskComponent } from './components/cnf-task/cnf-task.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'manage', component: ManagePortalComponent },
  { path: 'new', component: CrtTaskComponent },
  { path: 'update', component: UpdTaskComponent},
  { path: 'show', component: ShwTaskComponent},
  { path: 'config', component: CnfTaskComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta para manejar páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
