import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-linear-chart',
  templateUrl: './canvas-linear-chart.component.html',
  styleUrls: ['./canvas-linear-chart.component.css']
})
export class CanvasLinearChartComponent implements AfterViewInit {
  @ViewChild('lineCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  ngAfterViewInit() {
    this.drawLineChart();
  }

  drawLineChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas.');
      return;
    }

    const data = [10, 20, 15, 25, 30, 40, 50];
    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];

    const width = canvas.width;
    const height = canvas.height;

    // Configuración del gráfico
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height - (data[0] / Math.max(...data)) * height);

    // Dibujar la línea
    for (let i = 1; i < data.length; i++) {
      ctx.lineTo((i / (data.length - 1)) * width, height - (data[i] / Math.max(...data)) * height);
    }

    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Etiquetas
    ctx.fillStyle = '#000';
    for (let i = 0; i < data.length; i++) {
      ctx.fillText(labels[i], (i / (data.length - 1)) * width, height - (data[i] / Math.max(...data)) * height - 5);
    }
  }
}
