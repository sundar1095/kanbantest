import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';
// import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KanbanAllModule,
    // TextBoxAllModule,
    ButtonAllModule,
    DatePickerModule,
    DialogModule,
     DropDownListAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
