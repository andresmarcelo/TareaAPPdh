import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LandingComponent } from './components/landing/landing.component';
import { ManagePortalComponent } from './components/manage-portal/manage-portal.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrtTaskComponent } from './components/crt-task/crt-task.component';
import { UpdTaskComponent } from './components/upd-task/upd-task.component';
import { ShwTaskComponent } from './components/shw-task/shw-task.component';
import { CnfTaskComponent } from './components/cnf-task/cnf-task.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http'; 
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule} from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ManagePortalComponent,
    NavComponent,
    FooterComponent,
    CrtTaskComponent,
    UpdTaskComponent,
    ShwTaskComponent,
    CnfTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    CardModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormsModule,
    FieldsetModule,
    ConfirmDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // O NO_ERRORS_SCHEMA
  providers: [
    provideClientHydration(),
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
