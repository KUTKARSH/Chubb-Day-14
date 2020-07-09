import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineChartComponent} from './line-chart/line-chart.component';
import {DoghnutChartComponent} from './doghnut-chart/doghnut-chart.component';
import {BubbleChartComponent} from './bubble-chart/bubble-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';


const routes: Routes = [
  {path : 'line',component : LineChartComponent},
  {path : 'doghnut' ,component : DoghnutChartComponent},
  {path : 'bubble' , component : BubbleChartComponent},
  {path : 'bar' , component : BarChartComponent},
  {path : 'pie' , component : PieChartComponent},
  {path : 'radar', component : RadarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
