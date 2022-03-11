import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})


export class ClubPage implements OnInit {

  selectedClub = null;
  clubs = [];
  players = [];
  newPlayerForm: FormGroup;
  playerAlreadyInClub = false;

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    public platform: Platform,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadSetup();
    this.loadNewPlayerForm();
  }

  async loadSetup() {
    this.selectedClub = this.apiService.currentUser.selectedClub;

    if (!this.selectedClub) {
      this.getPossibleClubs().subscribe((clubs: any) => {
        this.clubs = clubs;
        console.log('possible clubs: ', this.clubs);
        if (this.clubs.length < 2) { this.setSelectedClub(this.clubs[0]); }
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

  checkForDuplicatedPlayer() {
    const emailCheck = this.newPlayerForm.get('email').value;
    this.playerAlreadyInClub = this.players.some((player) => player.email == emailCheck);
    if (this.playerAlreadyInClub) {
      this.newPlayerForm.get('email').setErrors(({ 'duplicate': true }));
    }
  }

  async submitForm() {
    this.newPlayerForm.controls["clubName"].setValue(this.selectedClub.name);
    this.apiService.addPlayerToClub(this.selectedClub._id, this.newPlayerForm.value).subscribe(async (x) => {
      await this.presentToast();
      await this.dismissModal();
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

  loadNewPlayerForm() {
    this.newPlayerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      // isAdmin: [''] TODO: Maybe we can define admins right on creation, currently it is desired to have this as additional step (like deleting via swipe)
      clubName: []
    });
  }

  get name() {
    return this.newPlayerForm.get('name');
  }

  get email() {
    return this.newPlayerForm.get('email');
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Aktivierungslink erfolgreich versandt',
      duration: 2000
    });
    toast.present();
  }

}
