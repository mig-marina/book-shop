import { Component, OnInit } from '@angular/core';

import { ConstantsService } from '../../core/services/constants.service';

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
  }

  constructor(private constantsService: ConstantsService) { }

  ngOnInit(): void {
    this.data = this.constantsService.getData();
  }

}
