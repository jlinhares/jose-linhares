import { Injectable } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private currentGrid: string[];
  private currentCode: number;
  private currentChar = '';

  private playing = false;

  private interval$: Observable<number>;
  private interval$sub: Subscription;

  constructor() { }

  get isPlaying(): boolean {
    return this.playing;
  }

  get grid(): string[] {
    if (this.currentGrid) {
      return this.currentGrid.slice(); // return a copy
    }
    return null;
  }
  get code(): number {
    return this.currentCode;
  }

  get character(): string {
    return this.currentChar;
  }

  set character(v: string) {
    this.currentChar = v;
  }

  start() {
    this.generate();
    this.interval$ = interval(2000);
    this.interval$sub = this.interval$.subscribe(() => {
      this.generate();
    });
    this.playing = true;

  }

  private generate(){
    // const a  = new Array(100).fill('');
    // let counter = 0;
    // this.currentGrid = a.map((v, i) => {
    //  if (this.currentChar && this.currentChar !== '' && this.currentChar.length === 1) {
    //    if (20 - counter === 100 - i ) {
    //      counter++;
    //      return this.currentChar;
    //    } else {
    //      if (counter < 20 && Math.round(Math.random() - 0.25)) {  // 0.25 evita concentração excessiva no ínicio
    //        counter++;
    //        return this.currentChar;
    //      }
    //    }
    //  }
    //  return String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
    //});
    
    this.currentGrid = [...Array(100)].map(
      () => String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97))
    );
    if (this.currentChar && this.currentChar !== '' && this.currentChar.length === 1) {
      this.currentGrid = this.currentGrid.fill(this.currentChar, 0, 20);
    }
    this.currentGrid.sort(() => Math.random() - 0.5);
    this.currentCode = this.getCode();
  }

  getCode(): number {
    const seconds = (new Date()).getSeconds();
    let ny = seconds % 10;
    let nx = (seconds - ny) / 10;
    let code = this.getCodeValue(nx, ny) * 10;
    [nx, ny] = [ny, nx];
    code += this.getCodeValue(nx, ny);
    return code;
  }

  private getCodeValue(x, y: number): number {
    const c = this.currentGrid[y * 10 + x];
    const count = this.currentGrid.filter(i =>  i === c).length;
    let ret = count;
    if (count > 9) {
      for (let i = 2; i < 9; i ++ ) {
        if (Math.round(count / i) <= 9 ){
          ret = Math.round(count / i);
          break;
        }
      }
    }
    return ret;
  }
}
