import { Component, OnInit } from '@angular/core';
import {HatsService} from '../hats.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private hatsService: HatsService) { }

  ngOnInit() {
  }

  number : number;
	half : number;

  	getHalf() {
  		this.half = this.hatsService.CalculateHalf(this.number);
  	}
}
