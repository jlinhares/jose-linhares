import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, style, stagger, animate, keyframes} from '@angular/animations';

import { Payment } from '../../../../services/payment/payment.model';
import { PaymentService } from '../../../../services/payment/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
  animations: [
    trigger('aniPayment', [
        transition('* => *', [
            query(':enter', [
                style({opacity: 0, transform: 'translateY(-5em)' }),
                stagger(100,  animate('300ms', keyframes([
                        style({ opacity: 0, transform: 'translateY(-5em)', offset: 0 }),
                        style({ opacity: 0.6, transform: 'translateY(2.5em)', offset: 0.6 }),
                        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
                    ]))
                )
            ], { optional: true })
        ])
    ]),
  ]
})
export class PaymentListComponent implements OnInit {

  constructor(private paymentSvc: PaymentService) { }

  get payments(): Payment[] {
    return this.paymentSvc.payments;
  }

  ngOnInit(): void {
  }

}
