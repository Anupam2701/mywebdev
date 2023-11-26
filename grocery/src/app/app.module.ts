import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetableComponent } from './vegetable/vegetable.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    VegetableComponent
  ],
  imports: [BrowserModule, AppRoutingModule], // Include AppRoutingModule
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
