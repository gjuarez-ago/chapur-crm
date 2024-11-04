import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasScatterChartComponent } from './canvas-scatter-chart.component';

describe('CanvasScatterChartComponent', () => {
  let component: CanvasScatterChartComponent;
  let fixture: ComponentFixture<CanvasScatterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasScatterChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
