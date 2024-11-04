import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasLinearChartComponent } from './canvas-linear-chart.component';

describe('CanvasLinearChartComponent', () => {
  let component: CanvasLinearChartComponent;
  let fixture: ComponentFixture<CanvasLinearChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasLinearChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasLinearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
