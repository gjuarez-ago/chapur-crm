import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enum/role';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {


  public isCollapsed = false;
  public showMenu = false;
  public isSalesmanRol = false;
  public isAdminRol = false;
  isLoadingMenu = true;
  public incidents: any;
  public currentSession: any;

  public haveIncident = true;
  public interval: any;

  constructor(
    // private authenticationService: AuthService,
    // private projectService: ProjectService,
    private router: Router,
    // private message: NzMessageService
  ) {}

  ngOnInit() {
    // if (this.authenticationService.isUserLoggedIn()) {
    //   this.session = this.authenticationService.getSessionFromLocalCache();
    //   this.currentSession = this.session.token;
    //   this.validate();
    // } else {
    //   this.router.navigateByUrl('/auth/login');
    //   clearInterval(this.interval);
    // }

    this.isLoadingMenu = true;
    this.showMenu = this.getMenu;
    this.isSalesmanRol = this.isSalesman;
    this.isAdminRol = this.isAdmin;




  }

  public onLogOut(): void {
    this.removeSession();
    this.router.navigate(['auth/login']);
    this.createMessage('success', 'Has cerrado sesión exitosamente 😀');
  }

  removeSession() {
    // this.subcriptions.push(
    //   this.authenticationService
    //     .removeSessionByUsernameAndToken(
    //       this.session?.username,
    //       this.session?.token
    //     )
    //     .subscribe(
    //       (response: any) => {},
    //       (errorResponse: HttpErrorResponse) => {
    //         this.createMessage('error', errorResponse.error.message);
    //       }
    //     )
    // );
  }

  

  validateSession() {
    // this.subcriptions.push(
    //   this.authenticationService
    //     .findSessionByUsername(this.session?.username)
    //     .subscribe(
    //       (response: Session) => {
    //         this.currentSession = response.token;
    //       },
    //       (errorResponse: HttpErrorResponse) => {
    //         console.error(errorResponse.error.message);
    //       }
    //     )
    // );
  }

  createMessage(type: string, message: string): void {
  }

  private getUserRole(): string {
    return "";
  }

  public get getMenu(): boolean {
    return (
      this.getUserRole() === Role.ROLE_ADMIN ||
      this.getUserRole() == Role.ROLE_MANAGER ||
      this.getUserRole() == Role.ROLE_ANALYST
    );
  }
  public get isAdmin(): boolean {
    return this.getUserRole() === Role.ROLE_ADMIN;
  }

  public get isManager(): boolean {
    return this.getUserRole() == Role.ROLE_MANAGER;
  }

  public get isAnalist(): boolean {
    return this.getUserRole() === Role.ROLE_ANALYST;
  }

  public get isSalesman(): boolean {
    return this.getUserRole() === Role.ROLE_SALESMAN;
  }

  public validateIncidents() {}

}
