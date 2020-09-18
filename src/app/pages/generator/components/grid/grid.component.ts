import { Component } from '@angular/core';

import { GeneratorService } from '../../../../services/generator/generator.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  {

  constructor(private generatorSvc: GeneratorService) { }

  get values(): string[] {
    return this.generatorSvc.grid;
  }

}
