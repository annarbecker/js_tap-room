import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap a new keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input type="number" step="any" placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="Alcohol" type="number" step="any" class="col-sm-8 input-lg" #newAlcohol>
      <select #newType>
        <option value="Ale">Ale</option>
        <option value="Stout">Stout</option>
        <option value="Lager">Lager</option>
        <option value="IPA">IPA</option>
      </select>
      <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol, newType)">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<any>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement, userType: HTMLInputElement) {
    var kegArray: Array<any> = [userName.value, userBrand.value, userPrice.value, userAlcohol.value, userType.value];
    console.log(kegArray);
    this.onSubmitNewKeg.emit(kegArray);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
}