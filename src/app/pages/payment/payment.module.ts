import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentComponent } from './payment.component';
import {PaymentRoutingModule} from './payment.routing';
import { SharedModule } from '../../modules/shared/shared.module';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';



@NgModule({
  declarations: [PaymentComponent, PaymentFormComponent, PaymentListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
