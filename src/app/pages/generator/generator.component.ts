import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  // selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  constructor(private generatorSvc: GeneratorService) { }


  get isLive(): boolean {
    return this.generatorSvc.isPlaying;
  }

  get code(): number {
    return this.generatorSvc.code;
  }

  ngOnInit(): void {

  }

  onGenerate(): void{
    this.generatorSvc.start();
  }

  onCharChange(ev: string): void {
    this.generatorSvc.character = ev;
  }

}
