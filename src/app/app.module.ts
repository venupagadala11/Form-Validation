import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionalDataComponent } from './additional-data/additional-data.component';
import { DispalyComponent } from './dispaly/dispaly.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditionalDataComponent,
    DispalyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
