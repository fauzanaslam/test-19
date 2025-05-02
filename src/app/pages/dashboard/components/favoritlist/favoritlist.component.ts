import { Component } from '@angular/core';
import { TablelistComponent } from "./tablelist/tablelist.component";

@Component({
  selector: 'app-favoritlist',
  imports: [TablelistComponent],
  template: `
    <div class="mt-10">
      <div class="flex text-white gap-10">
        <p class="font-bold text-2xl mt-3">Favorit</p>
        <div>
          <div class="mb-4">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-orange-600 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-500 border-orange-600 dark:border-orange-500"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-styled-tab"
                  data-tabs-target="#styled-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  IDR
                </button>
              </li>
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-styled-tab"
                  data-tabs-target="#styled-dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  USD
                </button>
              </li>
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-styled-tab"
                  data-tabs-target="#styled-settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  BNB
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-styled-tab"
                  data-tabs-target="#styled-contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  BTC
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-styled-tab"
                  data-tabs-target="#styled-contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  ALTS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="default-styled-tab-content">
        <div
          class="hidden rounded-lg bg-transparent"
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <app-tablelist />
        </div>
        <div
          class="hidden rounded-lg bg-transparent"
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <app-tablelist />
        </div>
        <div
          class="hidden rounded-lg bg-transparent"
          id="styled-settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <app-tablelist />
        </div>
        <div
          class="hidden rounded-lg bg-transparent"
          id="styled-contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <app-tablelist />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class FavoritlistComponent {}
