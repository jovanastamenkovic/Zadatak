import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataValueComponent } from './data-value.component';
import { HttpClientModule } from '@angular/common/http';
import { DataValueService } from './data-value.service';

@NgModule({
  declarations: [
    AppComponent, DataValueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataValueService],

  bootstrap: [AppComponent, DataValueComponent]
})
export class AppModule { }
