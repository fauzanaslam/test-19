import { Component } from '@angular/core';
import { BukuorderlistComponent } from "./bukuorderlist/bukuorderlist.component";
import { CandlechartComponent } from "./candlechart/candlechart.component";
import { SpotComponent } from "./spot/spot.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { PerdaganganComponent } from "./perdagangan/perdagangan.component";
import { TabletransaksiComponent } from "./tabletransaksi/tabletransaksi.component";


@Component({
  selector: 'app-detail',
  imports: [BukuorderlistComponent, CandlechartComponent, SpotComponent, FavoritesComponent, PerdaganganComponent, TabletransaksiComponent],
  template: `
    <div class="px-25 pb-10">
      <div
        class="text-white flex gap-6 items-center mt-10 p-4 text-sm bg-[#080c14]"
      >
        <p class="font-semibold text-2xl">BTC/IDR</p>
        <div>
          <p class="mb-1">12.323</p>
          <p>Rp 12, 323.00</p>
        </div>
        <div>
          <p class="mb-1">Perubahan 24jam</p>
          <p class="text-[#FF0000]">-687-5.28%</p>
        </div>
        <div>
          <p class="mb-1">High 24jam</p>
          <p>13,010</p>
        </div>
        <div>
          <p class="mb-1">Low 24jam</p>
          <p>11,860</p>
        </div>
        <div>
          <p class="mb-1">Volume 24jam(BTC)</p>
          <p>42,556.70</p>
        </div>
        <div>
          <p class="mb-1">Volume 24jam(IDR)</p>
          <p>520,707,732.80</p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 w-full mt-4">
        <div class="col-span-3 text-white rounded-sm bg-[#080c14] px-3 py-4">
          <p class="font-semibold my-2 text-lg">Buku Order</p>
          <hr class="border-gray-600 px-0" />
          <app-bukuorderlist bgColor="#611e1e" textColor="#FF0000" />
          <div class="flex justify-between pt-5">
            <p class="font-semibold">12,333</p>
            <p class="font-semibold">Rp 12,323.00</p>
          </div>
          <hr class="border-gray-600 px-0 my-4" />
          <app-bukuorderlist bgColor="#0ECB8133" textColor="#6EDC86" />
        </div>
        <div class="col-span-6 h-full">
          <div
            class="flex justify-between bg-[#20242c] text-white px-2 py-4 rounded-t-lg"
          >
            <div>Waktu 15M 1J 4J 1H 1M</div>
            <div class="flex gap-5">
              <p>Asli</p>
              <p>Trading View</p>
              <p>Kedalaman</p>
            </div>
          </div>
          <div
            class="flex gap-1 justify-between bg-[#20242c] text-white text-sm p-2 mt-1"
          >
            <p>2025/02/05</p>
            <p>Buka: <span class="text-[#6EDC86]">12227</span></p>
            <p>Tinggi: <span class="text-[#6EDC86]">12227</span></p>
            <p>Renda: <span class="text-[#6EDC86]">12227</span></p>
            <p>Tutup: <span class="text-[#6EDC86]">12227</span></p>
            <p>Perubahan: <span class="text-[#6EDC86]">0.19%</span></p>
            <p>Amplitudo: <span class="text-[#6EDC86]">2.76%</span></p>
          </div>
          <app-candlechart />
          <app-spot />
        </div>
        <div class="col-span-3 h-full">
          <app-favorites />
          <app-perdagangan />
        </div>
      </div>
      <app-tabletransaksi />
    </div>
  `,
  styles: ``,
})
export class DetailComponent {}
