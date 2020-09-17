import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { HomeService } from '../services/home.service';



@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule, 
    HttpClientModule, HomeRoutingModule
  ],
  providers: [HomeService]
})

export class HomeModule { }
