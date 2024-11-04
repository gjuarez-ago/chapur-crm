import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-pie-chart',
  templateUrl: './canvas-pie-chart.component.html',
  styleUrls: ['./canvas-pie-chart.component.css']
})
export class CanvasPieChartComponent implements AfterViewInit {
  @ViewChild('pieCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  ngAfterViewInit() {
    this.drawPieChart();
  }

  drawPieChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas.');
      return;
    }

    const data = [30, 20, 50];
    const labels = ['Rojo', 'Azul', 'Verde'];
    const colors = ['#ff6384', '#36a2eb', '#4bc0c0'];
    const total = data.reduce((acc, value) => acc + value, 0);
    let startAngle = 0;

    // Dibujar cada segmento
    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (data[i] / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2); // Centro del pie
      ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i];
      ctx.fill();

      // Etiquetas
      ctx.fillStyle = '#000';
      const textX = canvas.width / 2 + Math.cos(startAngle + sliceAngle / 2) * (canvas.width / 4);
      const textY = canvas.height / 2 + Math.sin(startAngle + sliceAngle / 2) * (canvas.height / 4);
      ctx.fillText(labels[i], textX, textY);

      startAngle += sliceAngle;
    }
  }
}
