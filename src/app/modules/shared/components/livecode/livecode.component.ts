import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../../../services/generator/generator.service';

@Component({
  selector: 'app-livecode',
  templateUrl: './livecode.component.html',
  styleUrls: ['./livecode.component.css']
})
export class LivecodeComponent implements OnInit {

  constructor(private generatorSvc: GeneratorService) { }

  ngOnInit(): void {
  }

  get isLive(): boolean {
    return this.generatorSvc.isPlaying;
  }

  get code(): number {
    return this.generatorSvc.code;
  }


}
