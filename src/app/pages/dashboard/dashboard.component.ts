import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  currentDate = new Date();
  totalClients = 120; // Simulación de datos
  openTickets = 15; // Simulación de datos
  monthlyRevenue = 5000; // Simulación de datos
  customers = [
    { name: 'Juan Pérez', email: 'juan@example.com', phone: '555-1234', registrationDate: new Date('2024-01-15') },
    { name: 'María López', email: 'maria@example.com', phone: '555-5678', registrationDate: new Date('2024-01-20') },
    { name: 'Luis García', email: 'luis@example.com', phone: '555-8765', registrationDate: new Date('2024-01-25') },
  ];

  onDateChange(date: Date): void {
    console.log('Selected date: ', date);
  }

  public getInitials() {
    const fullName = "GABRIEL JUAREZ".split(' ');
    const initials = fullName.shift()!.charAt(0) + fullName.pop()!.charAt(0);
    return initials.toUpperCase();
  }

  totalSales: number = 250; // Ejemplo de datos para total de ventas
  activeUsers: number = 320; // Ejemplo de datos para usuarios activos
  totalNotifications: number = 45; // Ejemplo de datos para notificaciones

  notifications = [
    {
      title: 'Nuevo Cliente Registrado',
      description: 'Se ha registrado un nuevo cliente.',
      date: new Date(),
      icon: 'user-add' // Puedes usar un icono de ng-zorro
    },
    {
      title: 'Reporte Generado',
      description: 'Se ha generado un nuevo reporte.',
      date: new Date(),
      icon: 'file-done'
    },
    {
      title: 'Actualización de Inventario',
      description: 'El inventario ha sido actualizado.',
      date: new Date(),
      icon: 'appstore'
    }
  ];
  loading = false;

}
