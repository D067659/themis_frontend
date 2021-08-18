import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

const USER_TOKEN_KEY = 'my-userinfo-token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentAccessToken = null;
  currentUser = null;
  url = environment.api_url;

  constructor(private http: HttpClient, private router: Router) {
    this.loadToken();
  }

  // Club API Calls
  getClubInformation(clubId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}`);
  }

  // Match API Calls
  getAllMatches(clubId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}/matches`);
  }

  // Participation API Calls
  getParticipationForMatch(clubId, matchId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}/matches/${matchId}/participations`);
  }

  setParticipationForMatch(clubId, matchId, doParticipate) {
    return this.http.put(`${this.url}/api/clubs/${clubId}/matches/${matchId}/participations`, { clubId, matchId, "hasTime": doParticipate });
  }

  // Load user data including accessToken on startup
  async loadToken() {
    let user = await Storage.get({ key: USER_TOKEN_KEY });
    if (user && user.value) {
      this.currentUser = JSON.parse(user.value);
      this.currentAccessToken = this.currentUser.token;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // Create new user
  signUp(credentials: { username, password }): Observable<any> {
    return this.http.post(`${this.url}/register`, credentials);
  }

  // Sign in a user and store its data
  login(credentials: { username, password }): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials).pipe(
      switchMap((user: { token }) => {
        this.currentAccessToken = user.token;
        console.log(user)
        const storeAccess = Storage.set({ key: USER_TOKEN_KEY, value: JSON.stringify(user) });
        return from(Promise.all([storeAccess]));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('/', { replaceUrl: true });
    return Storage.remove({ key: USER_TOKEN_KEY });
  }
}