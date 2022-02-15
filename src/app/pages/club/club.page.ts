import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})


export class ClubPage implements OnInit {

  selectedClub = null;
  clubs = [];
  players = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.loadSetup();
  }

  async loadSetup() {
    this.selectedClub = this.apiService.currentUser.selectedClub;

    if (!this.selectedClub) {
      this.getPossibleClubs().subscribe((clubs: any) => {
        this.clubs = clubs;
        if (this.clubs.length == 1) { this.setSelectedClub(this.clubs[0]); }
      });
    } else {
      this.getPlayersForClub();
    }
  }

  getPossibleClubs() {
    return from(this.apiService.currentUser.clubs).pipe(
      mergeMap((club: any) => this.apiService.getClubInformation(club.clubId)),
      toArray()
    )
  }

  setSelectedClub(club) {
    this.selectedClub = club;
    this.apiService.setSelectedClub(this.selectedClub).then(() => { this.getPlayersForClub(); });
  }

  resetSelectedClub() {
    this.selectedClub = null;
    this.apiService.removeSelectedClub();
    if (this.clubs.length == 0) {
      this.getPossibleClubs().subscribe((clubs: any) => { this.clubs = clubs; });
    }
  }

  getPlayersForClub() {
    // Get all possible players for selected club
    this.apiService.getPlayersForClub(this.apiService.currentUser.selectedClub._id).subscribe((players: any) => {
      this.players = players
    });
  }

}
