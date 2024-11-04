import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-scatter-chart',
  templateUrl: './canvas-scatter-chart.component.html',
  styleUrls: ['./canvas-scatter-chart.component.css']
})
export class CanvasScatterChartComponent implements AfterViewInit {
  @ViewChild('scatterCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.drawScatterChart();
  }

  drawScatterChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas.');
      return;
    }

    // Datos de ejemplo (x, y)
    const data = [
      { x: 10, y: 20 },
      { x: 15, y: 25 },
      { x: 20, y: 15 },
      { x: 25, y: 30 },
      { x: 30, y: 35 },
      { x: 35, y: 20 },
      { x: 40, y: 50 },
    ];

    const width = canvas.width;
    const height = canvas.height;

    // Configuración del gráfico
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#007bff'; // Color del punto

    // Dibujar los puntos
    for (const point of data) {
      const x = (point.x / 50) * width; // Normalizando el valor de x
      const y = height - (point.y / 50) * height; // Invirtiendo y para la representación en canvas
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI); // Radio del punto
      ctx.fill();
    }

    // Etiquetas de los ejes
    ctx.fillStyle = '#000';
    ctx.fillText('X', width - 10, height - 10);
    ctx.fillText('Y', 10, 10);
  }
}
