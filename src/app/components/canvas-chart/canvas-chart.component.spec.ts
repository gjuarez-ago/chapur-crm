import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasChartComponent } from './canvas-chart.component';

describe('CanvasChartComponent', () => {
  let component: CanvasChartComponent;
  let fixture: ComponentFixture<CanvasChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
