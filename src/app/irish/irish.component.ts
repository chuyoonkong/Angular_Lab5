import { Component, OnInit } from '@angular/core';
import {HatsService} from '../hats.service';

@Component({
  selector: 'app-irish',
  templateUrl: './irish.component.html'
})
export class IrishComponent implements OnInit {

  constructor(private hatsService: HatsService) { }

  ngOnInit() {
  }
  uimhir : number;
	leath : number;

  	fuairHalf() {
  		this.leath = this.hatsService.CalculateHalf(this.uimhir);
  	}


}
