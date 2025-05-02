import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bukuorderlist',
  imports: [],
  template: `
    <div>
      <div class="flex justify-between py-2">
        <p>Harga IDR</p>
        <p>Jumlah BTC</p>
        <p>Total</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p [style.backgroundColor]="bgColor()">12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div class="flex justify-between py-2">
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
      <div
        class="flex justify-between py-2"
        [style.backgroundColor]="bgColor()"
      >
        <p [style.color]="textColor()">13272</p>
        <p>975.1</p>
        <p>12,941</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class BukuorderlistComponent {
  textColor = input('');
  bgColor = input('');
}
