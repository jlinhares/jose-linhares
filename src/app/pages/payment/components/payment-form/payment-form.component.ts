  import { Component } from '@angular/core';
  import {FormGroup, FormControl} from '@angular/forms';

  import { PaymentService } from '../../../../services/payment/payment.service';

  @Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  private prvAcceptPayment = false;

  paymentForm: FormGroup;

  constructor(private paymentSvc: PaymentService) {
    this.paymentForm = new FormGroup({
      name: new FormControl({value: '', disabled: !this.acceptPayment}),
      amount: new FormControl({value: '', disabled: !this.acceptPayment})
    });
  }

  get acceptPayment(): boolean {
    return this.paymentSvc.acceptPayment;
  }

  onSubmit(): void {
    this.paymentSvc.addPayment(this.paymentForm.value.name, this.paymentForm.value.amount );
    this.paymentForm.controls['name'].setValue('');
    this.paymentForm.controls['amount'].setValue('');
  }
}
