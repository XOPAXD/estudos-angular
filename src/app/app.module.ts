import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';
import { ComponentModalComponent } from './component-modal/component-modal.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ComponentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ComponentModalComponent]
})
export class AppModule {  }
