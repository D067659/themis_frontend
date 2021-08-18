import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  datepickerinput = null;
  today = 2021;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.selectedClub = this.apiService.currentUser.selectedClub;

    if (!this.selectedClub) {
      this.getPossibleClubs()

      if (this.clubs.length == 1) {
        this.setSelectedClub(this.clubs[0]);
      }
    }
    else {
      this.getAllMatches()
    }
  }

  getPossibleClubs() {
    for (const club of this.apiService.currentUser.clubs) {
      this.apiService.getClubInformation(club.clubId).subscribe((club: any) => {
        this.clubs.push(club)
      });
    }
  }

  setSelectedClub(club) {
    this.selectedClub = club;
    this.apiService.currentUser.selectedClub = this.selectedClub;
    this.getAllMatches()
  }

  getAllMatches() {
    this.apiService.getAllMatches(this.selectedClub._id).subscribe((matches: Array<any>) => {
      // Check for users participation for each match
      matches.forEach(match => {
        this.apiService.getParticipationForMatch(match.clubId, match._id).subscribe((participation: any) => {
          match.doParticipate = participation?.hasTime;
        })
      });
      this.matches = matches
    });
  }

  toggleParticipation(match) {
    match.doParticipate = false;
  }

  selectParticipation(match) {
    this.apiService.setParticipationForMatch(match.clubId, match._id, match.doParticipate).subscribe(async (res: any) => {
      match.isBlocked = true;
      const answer = res.hasTime ? 'bestätigt' : 'abgelehnt';
      const toast = await this.toastController.create({
        message: `Teilnahme wurde ${answer}`,
        duration: 2000,
        color: res.hasTime ? 'success' : 'danger'
      });
      toast.present();

      toast.onDidDismiss().then(() => {
        match.isBlocked = false;
      });
    })
  }

  resetSelectedClub() {
    this.selectedClub = null;
    this.matches = null;
  }

  test() {
    console.log(this.datepickerinput);
  }

}
