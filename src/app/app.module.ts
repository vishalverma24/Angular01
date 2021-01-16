import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './01_components/components.module';
import { AssignmentModule } from './assignment/assignment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AssignmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
