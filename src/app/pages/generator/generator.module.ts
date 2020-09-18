import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {GeneratorRoutingModule} from './generator.routing';
import { GeneratorComponent } from './generator.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../../modules/shared/shared.module';



@NgModule({
  declarations: [GeneratorComponent, GridComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneratorRoutingModule,
    SharedModule
  ]
})
export class GeneratorModule { }
