import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivecodeComponent } from './components/livecode/livecode.component';



@NgModule({
  declarations: [LivecodeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LivecodeComponent
  ]
})
export class SharedModule { }
