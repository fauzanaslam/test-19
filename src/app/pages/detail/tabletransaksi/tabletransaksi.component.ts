import { Component } from '@angular/core';

@Component({
  selector: 'app-tabletransaksi',
  imports: [],
  template: `
    <div class="bg-[#080c14] p-3 text-white rounded-sm mt-4">
      <div class="flex gap-6 font-semibold">
        <p>Transaksi Terbuka (0)</p>
        <p class="text-gray-600">Riwayat Order</p>
        <p class="text-gray-600">Riwayat Perdagangan</p>
      </div>
      <hr class="border-gray-600 my-4" />

      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-white uppercase"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Tanggal</th>
              <th scope="col" class="px-6 py-3">Pasangan</th>
              <th scope="col" class="px-6 py-3">Jenis</th>
              <th scope="col" class="px-6 py-3">Sisi</th>
              <th scope="col" class="px-6 py-3">Harga</th>
              <th scope="col" class="px-6 py-3">Jumlah</th>
              <th scope="col" class="px-6 py-3">Terisi</th>
              <th scope="col" class="px-6 py-3">Total</th>
              <th scope="col" class="px-6 py-3">Kondisi Pemicu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="12" class="text-center py-20">
                Anda tidak memiliki order Terbuka
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: ``,
})
export class TabletransaksiComponent {}
