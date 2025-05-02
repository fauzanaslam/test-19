import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablelist',
  imports: [],
  template: `
    <div class="relative overflow-x-auto shadow-md">
      <table
        class="w-full text-sm text-left rtl:text-right text-white dark:text-white"
      >
        <thead
          class="text-xs text-white uppercase bg-trasparent dark:bg-transparent dark:text-white"
        >
          <tr>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center text-nowrap">
                Pasangan
                <a href="#"
                  ><svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                    /></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center text-nowrap">
                Harga Terakhir
                <a href="#"
                  ><svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                    /></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center text-nowrap">
                Perubahan 24 jam
                <a href="#"
                  ><svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                    /></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center text-nowrap">
                Tertinggi / Terendah 24jam
                <a href="#"
                  ><svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                    /></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center text-nowrap">
                Kapitalisasi Pasar
                <a href="#"
                  ><svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                    /></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center text-nowrap">
                Volume 24 Jam
                <a href="#"
                  ><svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
                    /></svg
                ></a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-transparent border-b dark:bg-transparent dark:border-gray-700 border-gray-200 cursor-pointer"
            (click)="navigateToDetail()"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-1">
                <img src="star.png" alt="star" />
                BTC/DAI
              </div>
            </th>
            <td class="px-6 py-4 text-nowrap">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td class="px-6 py-4 text-green-600">+3.89%</td>
            <td class="px-6 py-4">102,451.34 / Rp 94,288.07</td>
            <td class="px-6 py-4">Rp 31,953.008T</td>
            <td class="px-6 py-4">1.538M</td>
          </tr>
          <tr
            class="bg-transparent border-b dark:bg-transparent dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-1">
                <img src="star2.png" alt="star" />
                BTC/DAI
              </div>
            </th>
            <td class="px-6 py-4 text-nowrap">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td class="px-6 py-4 text-green-600">+3.89%</td>
            <td class="px-6 py-4">102,451.34 / Rp 94,288.07</td>
            <td class="px-6 py-4">Rp 31,953.008T</td>
            <td class="px-6 py-4">1.538M</td>
          </tr>
          <tr
            class="bg-transparent border-b dark:bg-transparent dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-1">
                <img src="star2.png" alt="star" />
                BTC/DAI
              </div>
            </th>
            <td class="px-6 py-4 text-nowrap">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td class="px-6 py-4 text-red-600">+3.89%</td>
            <td class="px-6 py-4">102,451.34 / Rp 94,288.07</td>
            <td class="px-6 py-4">Rp 31,953.008T</td>
            <td class="px-6 py-4">1.538M</td>
          </tr>
          <tr
            class="bg-transparent border-b dark:bg-transparent dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-1">
                <img src="star2.png" alt="star" />
                BTC/DAI
              </div>
            </th>
            <td class="px-6 py-4 text-nowrap">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td class="px-6 py-4 text-green-600">+3.89%</td>
            <td class="px-6 py-4">102,451.34 / Rp 94,288.07</td>
            <td class="px-6 py-4">Rp 31,953.008T</td>
            <td class="px-6 py-4">1.538M</td>
          </tr>
          <tr
            class="bg-transparent border-b dark:bg-transparent dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-1">
                <img src="star2.png" alt="star" />
                BTC/DAI
              </div>
            </th>
            <td class="px-6 py-4 text-nowrap">
              98,832.93 / Rp 1,612,213,281.72
            </td>
            <td class="px-6 py-4 text-green-600">+3.89%</td>
            <td class="px-6 py-4">102,451.34 / Rp 94,288.07</td>
            <td class="px-6 py-4">Rp 31,953.008T</td>
            <td class="px-6 py-4">1.538M</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class TablelistComponent {
  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/detail']);
  }
}
