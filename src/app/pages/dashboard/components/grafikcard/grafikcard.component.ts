import { Component, Input } from '@angular/core';
import { DashchartComponent } from "../dashchart/dashchart.component";

@Component({
  selector: 'app-grafikcard',
  imports: [DashchartComponent],
  template: `
    <div
      class="block max-w-sm p-2 rounded-lg shadow bg-[#0B132280] border border-solid border-[#0B132280] text-white"
    >
      <div class="grid grid-cols-2">
        <div class="flex flex-col justify-between">
          <p class="text-sm">TKO/IDR</p>
          <p class="font-bold">Rp 5,261.3</p>
          <p [style.color]="linecolor">-3.82%</p>
        </div>
        <div>
          <app-dashchart
            [datachart]="datachart"
            [linecolor]="linecolor"
          ></app-dashchart>
          <p class="text-sm">Volume : 2,258 IDR</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class GrafikcardComponent {
  @Input() datachart: number[] = [];
  @Input() linecolor: string = '';
}
