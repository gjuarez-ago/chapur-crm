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