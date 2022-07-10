import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pzs-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user!: User;
  subscriptions: Subscription[] = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    const sub = this.auth.user$.subscribe(user => this.user = user);
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
      this.subscriptions?.length &&
        this.subscriptions.forEach(s => s.unsubscribe());
  }

}
