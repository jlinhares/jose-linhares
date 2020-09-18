import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GeneratorService } from './services/generator/generator.service';
import { PaymentService } from './services/payment/payment.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    GeneratorService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
