import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {

  selectedClub = null;
  clubs = [];
  matches = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.selectedClub = this.apiService.currentUser.selectedClub;

    if (!this.selectedClub) {
      this.getPossibleClubs()
    } else {
      this.getAllMatches()
    }
  }

  getPossibleClubs() {
    for (const club of this.apiService.currentUser.clubs) {
      this.apiService.getClubInformation(club.clubId).subscribe((res: any) => {
        this.clubs.push(res)
      });
    }
  }

  setSelectedClub(clubId) {
    this.selectedClub = clubId;
    this.apiService.currentUser.selectedClub = this.selectedClub;
  }

  getAllMatches() {
    this.apiService.getAllMatches(this.selectedClub).subscribe((res: any) => {
      this.clubs.push(res)
    });
  }

}
