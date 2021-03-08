import { Component, OnInit } from '@angular/core';

import { ConstantsService } from '../../core/services/constants.service';
import { GeneratorService } from '../../core/services/generator.service';

const objData = new ConstantsService('TaskManager', '1.0');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [{provide: ConstantsService, useValue: objData}]
})
export class AboutComponent implements OnInit {
  data: {
    app: string,
    ver: string
  };
  str: string;

  constructor(private constantsService: ConstantsService, private generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.data = this.constantsService.getData();
    this.GeneratorFactory(20);
  }

  GeneratorFactory(n) {
    this.str = this.generatorService.getStr(n);
    console.log(this.str);
  }
}
