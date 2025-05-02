import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  imports: [],
  template: `
    <div class="text-white rounded-sm bg-[#080c14] px-3 py-4">
      <div class="relative mb-6">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        >
          <img src="/search.png" alt="search" width="20" height="20" />
        </div>
        <input
          type="text"
          id="input-group-1"
          class="bg-gray-50 border border-gray-300 text-white font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-[#20242c] dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cari"
        />
      </div>
      <div class="flex gap-2 justify-between">
        <p class="font-semibold text-white">Favorites</p>
        <p class="font-semibold text-white">IDR</p>
        <p class="font-semibold text-gray-500">USD</p>
        <p class="font-semibold text-gray-500">BNB</p>
        <p class="font-semibold text-gray-500">BTC</p>
        <p class="font-semibold text-gray-500">ALTS</p>
      </div>
      <hr class="my-4 border-gray-600" />
      <div class="flex justify-between items-center">
        <p>Pasangan</p>
        <p>harga</p>
        <p>Ubah</p>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>ADA/IDR</p>
        <div class="flex gap-14">
          <p>12,501</p>
          <p class="text-[#6EDC86]">+3.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>ARB/IDR</p>
        <div class="flex gap-14">
          <p>8,125</p>
          <p class="text-[#6EDC86]">+2.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>AVAX/IDR</p>
        <div class="flex gap-14">
          <p>439,245</p>
          <p class="text-[#6EDC86]">+1.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>DOGE/IDR</p>
        <div class="flex gap-14">
          <p>3,361</p>
          <p class="text-[#6EDC86]">+5.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>ETH/IDR</p>
        <div class="flex gap-15">
          <p>46,000,000</p>
          <p class="text-[#FF3B3B]">-3.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>MANTA/IDR</p>
        <div class="flex gap-15">
          <p>24,4</p>
          <p class="text-[#FF3B3B]">-1.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>NBT/IDR</p>
        <div class="flex gap-15">
          <p>48,8</p>
          <p class="text-[#FF3B3B]">-2.30%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>NOT/IDR</p>
        <div class="flex gap-14">
          <p>975.1</p>
          <p class="">+3.00%</p>
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <p>SOL/IDR</p>
        <div class="flex gap-14">
          <p>975.1</p>
          <p class="">+3.00%</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class FavoritesComponent {}
