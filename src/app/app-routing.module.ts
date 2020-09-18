import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'generator', loadChildren: () => import('./pages/generator/generator.module').then(m => m.GeneratorModule)},
  { path: 'payment', loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule)},
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
