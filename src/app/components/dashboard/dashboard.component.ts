import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private readonly auth: AuthService) {}

  logout = () => {
    this.router.navigateByUrl('login');
    this.auth.logout();
  }

}
