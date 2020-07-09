import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doghnut-chart',
  templateUrl: './doghnut-chart.component.html',
  styleUrls: ['./doghnut-chart.component.css']
})
export class DoghnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

}
