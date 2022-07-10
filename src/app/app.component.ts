import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pizza-ssr';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthorization().subscribe();
  }
}
