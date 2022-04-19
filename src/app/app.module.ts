import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KanbanAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
