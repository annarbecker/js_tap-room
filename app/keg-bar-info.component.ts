import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-bar-info',
  inputs: ['keg'],
  template: `
  <p>Pints Remaining: {{keg.pints}} </p>
  <div class="keg-quanity" *ngIf="keg.pints >0">
    <input type="number" placeholder="Number of pints" #pintQuantity>
    <button class="btn btn-default" (click)="sellPint(pintQuantity)">Sell Pints</button>
  </div>
  <button class="btn btn-danger" (click)="newKeg()" *ngIf="keg.pints < 10">New Keg</button>
  `
})

export class KegBarInfoComponent {
  public keg: Keg;
  sellPint(userQuantity: HTMLInputElement):void {
    if(this.keg.pints - parseInt(userQuantity.value) < 0) {
      alert("Arg not enough pints!");
    } else {
      this.keg.pints -= parseInt(userQuantity.value);
    }
  }
  newKeg():void {
    this.keg.pints = 124;
  }
}