import { Injectable } from '@angular/core';

@Injectable()
export class HatsService {

  constructor() { }

  CalculateHalf(num:number):number{
    return num/2;
  }

}
