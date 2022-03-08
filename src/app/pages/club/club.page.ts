import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Platform } from '@ionic/angular';

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
    private alertController: AlertController,
    public platform: Platform
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

  async promtForDeletion(player) {
    const alert = await this.alertController.create({
      header: 'Löschen bestätigen!',
      message: `Bitte bestätigen, dass Sie ${player.name} aus dem Verein entfernen möchten.`,
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Bestätigen',
          cssClass: 'danger',
          handler: () => {
            this.removePlayerFromClub(player);
          }
        }
      ]
    });

    await alert.present();
  }

  async removePlayerFromClub(player) {
    this.apiService.removePlayerFromClub(this.apiService.currentUser.selectedClub._id, player._id).subscribe(() => {
      this.players = this.players.filter(remainingPlayers => remainingPlayers._id !== player._id);
    });;
  }

  hasAdminRole() {
    return this.apiService.hasRoleForClub('admin', this.selectedClub._id);
  }

  isDesktop() {
    return this.platform.is('desktop');
  }

  entryIsMe(player) {
    return player._id == this.apiService.currentUser._id;
  }

}
