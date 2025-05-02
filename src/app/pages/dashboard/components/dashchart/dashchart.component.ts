import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  markers: ApexMarkers;
  colors: string[];
};

@Component({
  selector: 'app-dashchart',
  imports: [NgApexchartsModule],
  template: `
    <div class="max-w-[200px]">
      <apx-chart
        [series]="chartOptions.series"
        [chart]="chartOptions.chart"
        [xaxis]="chartOptions.xaxis"
        [yaxis]="chartOptions.yaxis"
        [dataLabels]="chartOptions.dataLabels"
        [grid]="chartOptions.grid"
        [stroke]="chartOptions.stroke"
        [title]="chartOptions.title"
        [colors]="chartOptions.colors"
      ></apx-chart>
    </div>
  `,
  styles: ``,
})
export class DashchartComponent implements OnChanges {
  @ViewChild('chart') chart: ChartComponent | undefined;
  @Input() datachart: number[] = [];
  @Input() linecolor: string = '';
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [],
        },
      ],
      chart: {
        height: 'auto',
        type: 'line',
        width: '100%',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false, // ⬅️ Hides the menu (toolbar)
        },
        background: 'transparent', // Removes chart background
      },
      colors: [],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: '', // Removes chart title
      },
      grid: {
        show: false, // Hides grid
      },
      tooltip: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        labels: {
          show: false, // Hides x-axis labels (months)
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
      yaxis: {
        labels: {
          show: false, // Hides y-axis labels (numbers)
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['datachart'] && changes['datachart'].currentValue) {
      this.chartOptions.series[0].data = this.datachart;
    }
    if (changes['linecolor'] && changes['linecolor'].currentValue) {
      this.chartOptions.colors = [this.linecolor];
    }
  }
}
