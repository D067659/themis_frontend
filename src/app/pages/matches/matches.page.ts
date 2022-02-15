import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { NewmatchPage } from '../newmatch/newmatch.page';


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
  dataLoaded = false;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadSetup();
  }

  async loadSetup() {
    this.selectedClub = this.apiService.currentUser.selectedClub;

    if (!this.selectedClub) {
      //this.getPossibleClubs()
      this.getPossibleClubs().subscribe((clubs: any) => {
        this.clubs = clubs;
        if (this.clubs.length == 1) { this.setSelectedClub(this.clubs[0]); }
      });
    } else {
      this.getAllMatches();
    }
  }

  getAllMatches() {
    this.apiService.getAllMatches(this.selectedClub._id)
      .subscribe(matches => {
        this.matches = matches.filter(match => match.doParticipate !== undefined); // undefined = no participation required, null = no feedback yet
        this.matches.sort((a, b) => {
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        });

      })
  }

  selectParticipation(match) {
    this.apiService.setParticipationForMatch(match.clubId, match._id, match.doParticipate).subscribe(async (res: any) => {
      match.isBlocked = true;
      const answer = res.hasTime ? 'bestätigt' : 'abgelehnt';
      const toast = await this.toastController.create({
        message: `Teilnahme wurde ${answer}`,
        duration: 2000,
        color: res.hasTime ? 'success' : 'warning'
      });
      toast.present();

      toast.onDidDismiss().then(() => {
        match.isBlocked = false;
      });
    })
  }

  getPossibleClubs() {
    return from(this.apiService.currentUser.clubs).pipe(
      mergeMap((club: any) => this.apiService.getClubInformation(club.clubId)),
      toArray()
    )
  }

  setSelectedClub(club) {
    this.selectedClub = club;
    this.apiService.setSelectedClub(this.selectedClub).then(() => { this.getAllMatches() });
  }

  resetSelectedClub() {
    this.selectedClub = null;
    this.apiService.removeSelectedClub();
    if (this.clubs.length == 0) {
      this.getPossibleClubs().subscribe((clubs: any) => { this.clubs = clubs; });
    }
  }

  async openNewMatchModal(match?) {
    const newMatch = await this.modalController.create({
      component: NewmatchPage,
      componentProps: {
        existingMatch: match
      }
    });

    newMatch.onDidDismiss()
      .then((event) => {
        const dataChanged = event['data'];
        if (dataChanged) { this.getAllMatches() }
      });
    return await newMatch.present();
  }

  hasAdminRole() {
    return this.apiService.hasRoleForClub('admin', this.selectedClub._id);
  }

}
