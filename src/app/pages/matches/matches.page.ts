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
  dataLoaded = false;

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
    } else {
      this.getAllMatches();
    }
  }

  getAllMatches() {
    this.apiService.getAllMatches(this.selectedClub._id).subscribe(matches => {
      matches.sort((a, b) => {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      });
      this.matches = matches;
    })
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
    this.getAllMatches();
  }

  resetSelectedClub() {
    this.selectedClub = null;
    this.matches = [];
  }

  test() {
    console.log(this.datepickerinput);
  }

}
