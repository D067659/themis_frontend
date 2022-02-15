import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Verein', url: '/club', icon: 'people-circle' },
    { title: 'Spiele', url: '/matches', icon: 'megaphone' }
  ];

  public accountPages = [
    { title: 'Profil', url: '/profile', icon: 'person' }
  ]

  constructor(public authService: ApiService) { }

  async logout() {
    await this.authService.logout();
  }
}
