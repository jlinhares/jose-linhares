
import { AnimationReferenceMetadata, animation, animate, style, query, sequence } from '@angular/animations';

export const fadeAnimation: AnimationReferenceMetadata = animation([
    query(':enter', [
        style({opacity: 0})
    ], { optional: true }),
    query(':leave', [
        style({display: 'none'})
    ], { optional: true }),
    query(':enter', [
        style({opacity: 0}),
        animate('0.4s', style({opacity: 1}))
    ], { optional: true }),
]);




