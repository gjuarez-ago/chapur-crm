import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  public subcriptions: Subscription[] = [];

  
  public isLoadingGeneral = false;
  public dateFormat = 'yyyy/MM/dd';
  isVisible = false;
  isConfirmLoading = false;

  public sortDirections = ['ascend', 'descend', null];

  constructor(
    private router: Router, private modal: NzModalService, private message: NzMessageService) { }

  ngOnInit(): void {
  
  }


  

  expandSet = new Set<number>();

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }


  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      sortDirections: [null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: [null],
      sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
   
    
  ];

  

  listOfData : DataItem[] = [
    {
      id: 1,
      name: 'Adrian Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'  
    },
    {
      id: 2,
      name: 'B Green',
      age: 42,
      expand: false,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ];

  showConfirm(): void {
    this.modal.error({
      nzTitle: 'Eliminar proyecto',
      nzContent: '¿Seguro que deseas eliminar el proyecto?',
      nzOkText: 'Eliminar',
      nzCancelText: 'Cancel'
    });
  }


  public onLogOut(): void {
    this.removeSession();
   
    this.router.navigate(['auth/login']);
    this.createMessage("success", "Has cerrado sesión exitosamente 😀");
  }

  
  removeSession() {
 
  }


  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }

  info(): void {
    this.modal.warning({
      nzTitle: '¿Seguro que deseas cerrar sesión?',
      // nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancelar',
      nzOnOk: () => { this.onLogOut() }
    });
  }

  public getInitials() {
    const fullName = "GABRIEL JUAREZ".split(' ');
    const initials = fullName.shift()!.charAt(0) + fullName.pop()!.charAt(0);
    return initials.toUpperCase();
  }
  clientes: Cliente[] = [
    {
      noCliente: 1, nombreCompleto: 'Juan Pérez', numIden: 'ABC123', plaza: 'Plaza A', fechaNacimiento: '1980-01-15', calificacion: 90, genero: 'Masculino', emailPrincipal: 'juan.perez@example.com', asignadoA: 'Carlos López',
      seleccionado: false
    },
    {
      noCliente: 2, nombreCompleto: 'Ana Gómez', numIden: 'XYZ456', plaza: 'Plaza B', fechaNacimiento: '1992-03-22', calificacion: 85, genero: 'Femenino', emailPrincipal: 'ana.gomez@example.com', asignadoA: 'María Jiménez',
      seleccionado: false
    },
    {
      noCliente: 3, nombreCompleto: 'Luis Martínez', numIden: 'EFG789', plaza: 'Plaza C', fechaNacimiento: '1975-06-10', calificacion: 88, genero: 'Masculino', emailPrincipal: 'luis.martinez@example.com', asignadoA: 'Jorge Sánchez',
      seleccionado: false
    },
    // Añade más clientes para llegar a 30
    {
      noCliente: 4, nombreCompleto: 'Pedro Rodríguez', numIden: 'HIJ101', plaza: 'Plaza D', fechaNacimiento: '1987-11-23', calificacion: 92, genero: 'Masculino', emailPrincipal: 'pedro.rodriguez@example.com', asignadoA: 'Sofía Medina',
      seleccionado: false
    },
    {
      noCliente: 5, nombreCompleto: 'María Fernández', numIden: 'KLM112', plaza: 'Plaza E', fechaNacimiento: '1995-05-18', calificacion: 75, genero: 'Femenino', emailPrincipal: 'maria.fernandez@example.com', asignadoA: 'Daniel Ruiz',
      seleccionado: false
    },
    {
      noCliente: 6, nombreCompleto: 'Carla Hernández', numIden: 'NOP134', plaza: 'Plaza F', fechaNacimiento: '1991-09-07', calificacion: 89, genero: 'Femenino', emailPrincipal: 'carla.hernandez@example.com', asignadoA: 'Patricia Ramírez',
      seleccionado: false
    },
    {
      noCliente: 7, nombreCompleto: 'José Navarro', numIden: 'QRS156', plaza: 'Plaza G', fechaNacimiento: '1983-02-12', calificacion: 84, genero: 'Masculino', emailPrincipal: 'jose.navarro@example.com', asignadoA: 'Andrés Gutiérrez',
      seleccionado: false
    },
    {
      noCliente: 8, nombreCompleto: 'Santiago Díaz', numIden: 'TUV178', plaza: 'Plaza H', fechaNacimiento: '1990-08-25', calificacion: 95, genero: 'Masculino', emailPrincipal: 'santiago.diaz@example.com', asignadoA: 'Carolina Flores',
      seleccionado: false
    },
    {
      noCliente: 9, nombreCompleto: 'Lucía Paredes', numIden: 'WXY190', plaza: 'Plaza I', fechaNacimiento: '1998-12-05', calificacion: 80, genero: 'Femenino', emailPrincipal: 'lucia.paredes@example.com', asignadoA: 'Raúl Romero',
      seleccionado: false
    },
    {
      noCliente: 10, nombreCompleto: 'Francisco Aguilar', numIden: 'ZAB210', plaza: 'Plaza J', fechaNacimiento: '1985-07-16', calificacion: 87, genero: 'Masculino', emailPrincipal: 'francisco.aguilar@example.com', asignadoA: 'Lorena Soto',
      seleccionado: false
    },
    {
      noCliente: 11, nombreCompleto: 'Sofía Ruiz', numIden: 'CDE232', plaza: 'Plaza K', fechaNacimiento: '1993-03-02', calificacion: 90, genero: 'Femenino', emailPrincipal: 'sofia.ruiz@example.com', asignadoA: 'Martín Herrera',
      seleccionado: false
    },
    {
      noCliente: 12, nombreCompleto: 'Enrique Romero', numIden: 'FGH254', plaza: 'Plaza L', fechaNacimiento: '1979-09-11', calificacion: 93, genero: 'Masculino', emailPrincipal: 'enrique.romero@example.com', asignadoA: 'Santiago Moreno',
      seleccionado: false
    },
    // Completa hasta llegar a 30 registros
    {
      noCliente: 13, nombreCompleto: 'Paola García', numIden: 'IJK276', plaza: 'Plaza M', fechaNacimiento: '1982-04-20', calificacion: 77, genero: 'Femenino', emailPrincipal: 'paola.garcia@example.com', asignadoA: 'Javier Torres',
      seleccionado: false
    },
    {
      noCliente: 14, nombreCompleto: 'Rodrigo Salinas', numIden: 'LMN298', plaza: 'Plaza N', fechaNacimiento: '1997-10-30', calificacion: 82, genero: 'Masculino', emailPrincipal: 'rodrigo.salinas@example.com', asignadoA: 'Carmen Sánchez',
      seleccionado: false
    },
    {
      noCliente: 15, nombreCompleto: 'Gabriela Quintana', numIden: 'OPQ320', plaza: 'Plaza O', fechaNacimiento: '1989-06-01', calificacion: 91, genero: 'Femenino', emailPrincipal: 'gabriela.quintana@example.com', asignadoA: 'Felipe Martínez',
      seleccionado: false
    },
    {
      noCliente: 16, nombreCompleto: 'Esteban Castillo', numIden: 'RST342', plaza: 'Plaza P', fechaNacimiento: '1984-11-19', calificacion: 94, genero: 'Masculino', emailPrincipal: 'esteban.castillo@example.com', asignadoA: 'Joaquín Vega',
      seleccionado: false
    },
    {
      noCliente: 17, nombreCompleto: 'Mónica Varela', numIden: 'UVW364', plaza: 'Plaza Q', fechaNacimiento: '1991-05-25', calificacion: 78, genero: 'Femenino', emailPrincipal: 'monica.varela@example.com', asignadoA: 'Clara Villalobos',
      seleccionado: false
    },
    {
      noCliente: 18, nombreCompleto: 'Antonio Serrano', numIden: 'XYZ386', plaza: 'Plaza R', fechaNacimiento: '1978-01-14', calificacion: 83, genero: 'Masculino', emailPrincipal: 'antonio.serrano@example.com', asignadoA: 'Roberto Morales',
      seleccionado: false
    },
    {
      noCliente: 19, nombreCompleto: 'Patricia Ortega', numIden: 'ABC408', plaza: 'Plaza S', fechaNacimiento: '1996-09-27', calificacion: 88, genero: 'Femenino', emailPrincipal: 'patricia.ortega@example.com', asignadoA: 'Guadalupe Ríos',
      seleccionado: false
    },
    {
      noCliente: 20, nombreCompleto: 'Mauricio Reyes', numIden: 'DEF430', plaza: 'Plaza T', fechaNacimiento: '1981-02-05', calificacion: 85, genero: 'Masculino', emailPrincipal: 'mauricio.reyes@example.com', asignadoA: 'Juanita Mendoza',
      seleccionado: false
    },
    // Añadir más hasta tener 30 o más registros.
  ];


  // Métodos para los botones de acción
  verCliente(cliente: Cliente) {
    console.log('Ver cliente:', cliente);
  }

  editarCliente(cliente: Cliente) {
    console.log('Editar cliente:', cliente);
  }

  eliminarCliente(cliente: Cliente) {
    console.log('Eliminar cliente:', cliente);
  }

  allChecked = false;
  clientesSeleccionados: any[] = [];

  searchText : any;

  // Al seleccionar/deseleccionar un checkbox individual
  onItemChecked(cliente: any): void {
    if (cliente.seleccionado) {
      this.clientesSeleccionados.push(cliente);
    } else {
      this.clientesSeleccionados = this.clientesSeleccionados.filter((c) => c !== cliente);
    }
    this.updateAllCheckedStatus();
  }

  // Al seleccionar/deseleccionar el checkbox principal
  onAllChecked(checked: boolean): void {
    this.allChecked = checked;
    this.clientes.forEach((cliente) => (cliente.seleccionado = checked));

    this.clientesSeleccionados = checked ? [...this.clientes] : [];
  }

  // Actualizar el estado del checkbox principal
  updateAllCheckedStatus(): void {
    const allSelected = this.clientes.every((cliente) => cliente.seleccionado);
    const noneSelected = this.clientes.every((cliente) => !cliente.seleccionado);

    this.allChecked = allSelected && !noneSelected;
  }

  descargarSeleccionados(): void {
    // Lógica para descargar seleccionados
    console.log('Descargar seleccionados:', this.clientesSeleccionados);
  }

}




interface Cliente {
  noCliente: number;
  nombreCompleto: string;
  numIden: string;
  plaza: string;
  fechaNacimiento: string;
  calificacion: number;
  genero: 'Masculino' | 'Femenino';
  emailPrincipal: string;
  asignadoA: string;
  seleccionado: boolean;
}


interface DataItem {
  id: number,
  name: string;
  age: number;
  expand: boolean,
  address: string,
  description: string
}



interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}