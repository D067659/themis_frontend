import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap, map, mergeMap, toArray } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';
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

  getPlayersForClub(clubId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}/players`);
  }

  // Match API Calls
  getAllMatches(clubId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}/matches`).pipe(
      mergeMap((matches: Array<any>) => from(matches)),
      mergeMap((match: any) => this.getParticipationForMatch(match.clubId, match._id, this.currentUser._id).pipe(
        map((participation: any) => ({ ...match, doParticipate: participation?.hasTime }))
      )),
      toArray()
    );
  }

  // Participation API Calls
  getParticipationForMatch(clubId, matchId, playerId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}/matches/${matchId}/participations/${playerId}`);
  }

  getAllParticipations(clubId, matchId) {
    return this.http.get(`${this.url}/api/clubs/${clubId}/matches/${matchId}/participations`);
  }

  setParticipationForMatch(clubId, matchId, doParticipate) {
    return this.http.put(`${this.url}/api/clubs/${clubId}/matches/${matchId}/participations`, { clubId, matchId, "hasTime": doParticipate });
  }

  //// <!------- Helper functions ------->
  // Globally set the chosen club for user
  async setSelectedClub(club) {
    let user = await Storage.get({ key: USER_TOKEN_KEY });
    if (user && user.value) {
      this.currentUser = JSON.parse(user.value);
      this.currentUser.selectedClub = club
      return Storage.set({ key: USER_TOKEN_KEY, value: JSON.stringify(this.currentUser) });
    }
  }

  // Globally remove the chosen club for user
  async removeSelectedClub() {
    let user = await Storage.get({ key: USER_TOKEN_KEY });
    if (user && user.value) {
      this.currentUser = JSON.parse(user.value);
      this.currentUser.selectedClub = null
      return Storage.set({ key: USER_TOKEN_KEY, value: JSON.stringify(this.currentUser) });
    }
    return null;
  }

  // Load user data including accessToken on startup
  async loadToken() {
    let user = await Storage.get({ key: USER_TOKEN_KEY });
    if (user && user.value) {
      this.currentUser = JSON.parse(user.value);
      if (this.currentUser.expireDate && new Date(this.currentUser.expireDate) > new Date()) {
        this.isAuthenticated.next(true);
        this.currentAccessToken = this.currentUser.token;
        console.log(this.currentUser)
      } else {
        this.isAuthenticated.next(false);
      }
    } else {
      this.isAuthenticated.next(false);
    }
  }

  hasRoleForClub(role, clubId) {
    const requiredClub = this.currentUser.clubs.find(club => club.clubId == clubId);
    return requiredClub.role == role;
  }

  // Create new user
  signUp(credentials: { username, password }): Observable<any> {
    return this.http.post(`${this.url}/register`, credentials);
  }

  // Sign in a user and store its data
  login(credentials: { username, password }): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials).pipe(
      switchMap((user: { token, expireDate, expiresInHours }) => {
        this.currentAccessToken = user.token;
        user.expireDate = this.addHours(new Date(), user.expiresInHours)
        delete user.expiresInHours;
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

  addHours = function (date, hours) {
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    return date;
  }
}