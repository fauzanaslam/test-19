import { Component } from '@angular/core';

@Component({
  selector: 'app-perdagangan',
  imports: [],
  template: `
    <div class="text-white rounded-sm bg-[#080c14] px-3 py-4 mt-4">
      <div class="flex justify-between items-center">
        <p class="font-bold text-lg">Perdagangan Market</p>
        <p class="font-bold text-gray-600 text-lg">Perdaganan Saya</p>
      </div>
      <hr class="border-gray-600 my-4" />
      <div class="flex justify-between py-2">
        <p>Harga IDR</p>
        <p>Jumlah BTC</p>
        <p>Waktu</p>
      </div>
      @for (item of items; track item.id) {
      <div class="flex justify-between py-2">
        <p>{{ item.p1 }}</p>
        <p>{{ item.p2 }}</p>
        <p>{{ item.p3 }}</p>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class PerdaganganComponent {
  items = [
    {
      id: 1,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 3,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 4,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 5,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 6,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 7,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 8,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 9,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },
    {
      id: 10,
      p1: '13272',
      p2: '975.1',
      p3: '11:00:12'
    },

  ]
}
