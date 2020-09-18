import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {trigger, transition} from '@angular/animations';

import { fadeAnimation } from './fade-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition( '* => *', [
        fadeAnimation
      ])
    ])
  ]
})
export class AppComponent {
  title = 'challenge';

  prepareRoute(outlet: RouterOutlet): ActivatedRoute | string {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
