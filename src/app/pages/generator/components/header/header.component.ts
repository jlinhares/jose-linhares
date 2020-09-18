import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Output() generate = new EventEmitter<void>();

  @Output() charChange = new EventEmitter<string>();

  @Input() playing = false;

  selectedChar: string;

  disabledInput = false;

  constructor() { }

  onclick() {
    this.generate.emit();
  }

  lettersOnly(ev: any) {
    if (ev.key.length === 1) {
      const newLetter = ev.key.replace(/[^a-z]/g, '');
      if (ev.target.value !== newLetter) {
        ev.target.value = newLetter;
        this.charChange.emit(newLetter);
        this.disabledInput = true;
        setTimeout(() => { this.disabledInput = false; }, 4000);
      }
    }
  }


}
