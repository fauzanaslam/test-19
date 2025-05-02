import { Component } from '@angular/core';
import { GrafikcardComponent } from './components/grafikcard/grafikcard.component';
import { FavoritlistComponent } from "./components/favoritlist/favoritlist.component";

@Component({
  selector: 'app-dashboard',
  imports: [GrafikcardComponent, FavoritlistComponent],
  template: `
    <div class="bg-gradient-to-b from-black to-[#040c24] h-screen px-40">
      <p class="text-white mt-10 text-5xl font-medium">Pasar</p>
      <p class="text-white mt-4">
        Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
      </p>
      <div class="grid grid-cols-4 gap-4 mt-10">
        <app-grafikcard
          [datachart]="[10, 80, 50, 100]"
          [linecolor]="'#17911b'"
        />
        <app-grafikcard
          [datachart]="[10, 80, 50, 100]"
          [linecolor]="'#17911b'"
        />
        <app-grafikcard
          [datachart]="[100, 50, 80, 10]"
          [linecolor]="'#911719'"
        />
        <app-grafikcard
          [datachart]="[100, 50, 80, 10]"
          [linecolor]="'#911719'"
        />
      </div>
      <app-favoritlist />
    </div>
  `,
  styles: ``,
})
export class DashboardComponent {}
