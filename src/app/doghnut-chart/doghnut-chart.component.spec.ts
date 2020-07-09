import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoghnutChartComponent } from './doghnut-chart.component';

describe('DoghnutChartComponent', () => {
  let component: DoghnutChartComponent;
  let fixture: ComponentFixture<DoghnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoghnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoghnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
