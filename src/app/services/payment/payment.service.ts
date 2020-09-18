import { Injectable } from '@angular/core';
import { GeneratorService } from '../generator/generator.service';

import {Payment} from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private aPayments: Payment[] = [
    // {name: 'Payment1', amount: 22, code: 23, grid: ['a', 'b', 'c']},
    // {name: 'Payment1', amount: 12, code: 34, grid: ['a', 'b', 'c', 'd']},
    // {name: 'Payment1', amount: 21, code: 93, grid: ['a', 'b']},
    // {name: 'Payment1', amount: 32, code: 25, grid: ['a', 'b', 'c']},
    // {name: 'Payment1', amount: 23, code: 56, grid: ['a', 'b', 'c', 'e', 'f']}
  ];

  get payments(): Payment[] {
    return this.aPayments.slice();  // return a copy
  }

  constructor(private generatorSvc: GeneratorService) { }

  get acceptPayment(): boolean {
    return this.generatorSvc.isPlaying;
  }

  addPayment(name: string, amount: number): void {
    this.aPayments.push({
      name,
      amount,
      code: this.generatorSvc.code,
      grid: this.generatorSvc.grid
    });
  }
}
