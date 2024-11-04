import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styleUrls: ['./canvas-chart.component.css']
})
export class CanvasChartComponent implements AfterViewInit {
  
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    // Verificar si ctx es nulo
    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas.');
      return; // Salir de la función si ctx es nulo
    }

    // Datos del gráfico
    const data = [10, 20, 30, 40, 50];
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

    // Dimensiones del canvas
    const width = canvas.width;
    const height = canvas.height;

    // Configurar el gráfico
    const barWidth = width / data.length;
    ctx.clearRect(0, 0, width, height); // Limpiar el canvas

    // Dibujar las barras
    for (let i = 0; i < data.length; i++) {
      const barHeight = (data[i] / Math.max(...data)) * height; // Normalizar la altura
      ctx.fillStyle = '#4CAF50'; // Color de la barra
      ctx.fillRect(i * barWidth, height - barHeight, barWidth - 5, barHeight);
      
      // Dibujar etiquetas
      ctx.fillStyle = '#000';
      ctx.fillText(labels[i], i * barWidth + barWidth / 2 - 10, height - barHeight - 5);
    }
  }
}
