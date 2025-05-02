import { Component } from '@angular/core';

@Component({
  selector: 'app-spot',
  imports: [],
  template: `
    <div class="text-white bg-[#100c1c] p-2">
      <p class="font-semibold">Spot</p>
      <hr class="border-gray-600 my-3" />
      <div class="flex gap-4">
        <p class="font-semibold">Limit</p>
        <p class="font-semibold text-gray-500">Pasar</p>
        <p class="font-semibold text-gray-500">Stop Limit</p>
      </div>
      <div class="flex justify-between my-2 gap-4">
        <div class="bg-[#20242c] rounded-md p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Harga</p>
            <div class="flex gap-4">
              <p class="text-sm">12332</p>
              <p class="text-sm">IDR</p>
              <img src="/updown.png" alt="updown" class="w-2 h-4 my-auto" />
            </div>
          </div>
        </div>
        <div class="bg-[#20242c] rounded-md p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Harga</p>
            <div class="flex gap-4">
              <p class="text-sm">12332</p>
              <p class="text-sm">IDR</p>
              <img src="/updown.png" alt="updown" class="w-2 h-4 my-auto" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-2 gap-4">
        <div class="bg-[#20242c] rounded-md p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Jumlah</p>
            <div class="flex gap-4">
              <p class="text-sm">0</p>
              <p class="text-sm">BTC</p>
              <img src="/updown.png" alt="updown" class="w-2 h-4 my-auto" />
            </div>
          </div>
        </div>
        <div class="bg-[#20242c] rounded-md p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Jumlah</p>
            <div class="flex gap-4">
              <p class="text-sm">0</p>
              <p class="text-sm">BTC</p>
              <img src="/updown.png" alt="updown" class="w-2 h-4 my-auto" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-2 gap-4">
        <div class="bg-[#20242c] rounded-md p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Total</p>
            <div class="flex gap-4">
              <p class="text-sm">0</p>
              <p class="text-sm">IDR</p>
            </div>
          </div>
        </div>
        <div class="bg-[#20242c] rounded-md p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Total</p>
            <div class="flex gap-4">
              <p class="text-sm">0</p>
              <p class="text-sm">IDR</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-2 gap-4">
        <div class="p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Tersedia</p>
            <div class="flex gap-4">
              <p class="font-semibold">1.000.000</p>
              <p class="font-semibold">IDR</p>
            </div>
          </div>
        </div>
        <div class="p-4 w-full">
          <div class="flex justify-between items-center">
            <p class="font-semibold">Tersedia</p>
            <div class="flex gap-4">
              <p class="font-semibold">1.000.000</p>
              <p class="font-semibold">BTC</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-2 gap-4">
        <div class="w-full">
          <button
            class="w-full text-white bg-transparent border-2 border-solid border-[rgba(213,124,23,1)] px-6 py-2 rounded-full font-bold text-sm cursor-pointer"
          >
            Beli BTC
          </button>
        </div>
        <div class="w-full">
          <button
            class="w-full text-white bg-transparent border-2 border-solid border-[rgba(213,124,23,1)] px-6 py-2 rounded-full font-bold text-sm cursor-pointer"
          >
            Jual BTC
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SpotComponent {}
