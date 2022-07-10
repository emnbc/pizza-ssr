import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pzs-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  user!: User;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => (this.user = user));
  }

  toHome() {
    this.router.navigate(['/']);
  }

  signOut() {
    this.auth.logOut();
    this.toHome();
  }
}
