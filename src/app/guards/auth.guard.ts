import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: ApiService, private router: Router) { }

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          const navigation = this.router.getCurrentNavigation();
          let url = '/';
          if (navigation) {
            url = navigation.extractedUrl.toString();
          }
          this.router.navigate(['/login'], { queryParams: { navigateto: url, redirect: 'Your session might be expired. Please log in again.' } });
          return false;
        }
      })
    );
  }
}