import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  isCollapsed = false;

  constructor(private $auth: AuthService, private router: Router) {}

  logout() {
    this.$auth.logout();
    this.router.navigate(['admin', 'auth'])
  }
}
