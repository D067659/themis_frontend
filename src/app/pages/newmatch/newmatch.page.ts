import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.page.html',
  styleUrls: ['./newmatch.page.scss'],
})
export class NewmatchPage implements OnInit {
  players: any = [];
  matchForm: FormGroup;
  minDate = new Date().toISOString();
  isSubmitted: boolean = false;
  matchInput;
  loaded = false;

  constructor(public formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalController: ModalController,
    private navParams: NavParams,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // Get all possible players for selected club
    this.apiService.getPlayersForClub(this.apiService.currentUser.selectedClub._id).subscribe((players: any) => {
      this.players = players
    });

    // Check if edit match mode and set model accordingly
    this.matchInput = this.navParams.get('existingMatch');
    let existingMatch = this.matchInput;
    if (existingMatch) {
      const dateParts = existingMatch.startDate.split('T');
      existingMatch.startDateShort = dateParts[0];
      existingMatch.startTime = dateParts[1];

      this.apiService.getAllParticipations(this.apiService.currentUser.selectedClub._id, existingMatch._id).subscribe((participations: any) => {
        // Map participations to players
        this.players.forEach((player, index, arr) => {
          const playerParticipation = participations.find(participation => participation.playerId == player._id) || 'not asked';
          arr[index].participation = playerParticipation;
        });
        this.loaded = true;
        console.log('players manipulated', this.players)
      });
    };

    this.matchForm = this.formBuilder.group({
      city: [existingMatch?.city, [Validators.required, Validators.minLength(4)]],
      opponent: [existingMatch?.opponent, [Validators.required, Validators.minLength(5)]],
      startDate: [existingMatch ? existingMatch.startDateShort : this.minDate],
      startTime: [existingMatch ? existingMatch.startTime : '18:00:00.000Z'],
      isHome: [existingMatch?.isHome ? true : false],
      meetingPoint: [existingMatch?.meetingPoint, [Validators.required, Validators.minLength(4)]],
      clubId: [existingMatch?.clubId ? existingMatch?.clubId : this.apiService.currentUser.selectedClub._id],
      _id: [existingMatch?._id]
    })
  }

  addToNewParticipantList(player) {
    if (!player.new) {
      player.participation = { hasTime: null };
      player.new = true;
    } else {
      player.participation = "not asked";
      player.new = false;
    }
  }

  getDate(e) {
    this.matchForm.get('startDate').setValue(e.target.value, { onlyself: true })
  }

  getTime(e) {
    this.matchForm.get('startTime').setValue(e.target.value, { onlyself: true })
  }

  get errorControl() {
    return this.matchForm.controls;
  }

  submitForm() {
    // ADD CLUBID RIGHT HERE
    this.isSubmitted = true;
    if (!this.matchForm.valid) {
      return false;
    } else {
      let match = this.matchForm.value;
      match.startDate = `${match.startDate.substr(0, 10)}T${match.startTime}`;

      if (this.minDate > match.startDate) {
        this.matchForm.get('startTime').setErrors({ serverValidationError: true });
        return this.showAlert({ error: { msg: { message: { message: 'Das Datum darf nicht in der Vergangenheit liegen.' } } } })
      }

      if (match._id == null) { // new match
        delete match._id;
        this.apiService.createMatch(match).subscribe((res: any) => {
          // Add creator to participants, otherwise nobody could see this game due to missing participants
          this.apiService.setParticipationForMatch(res.clubId, res._id, null).subscribe((res: any) => {
            this.showSuccess();
            this.dismissModal();
          });
        }, (error) => { this.showAlert(error) })
      } else { // update existing match
        if (this.matchForm.dirty) {
          this.apiService.updateMatch(match).subscribe((res: any) => {
          }, (error) => { this.showAlert(error) })
        }

        const newParticipants = this.players.filter(p => p.new);
        for (const participant of newParticipants) {
          this.apiService.askForParticipation(this.apiService.currentUser.selectedClub._id, this.matchForm.controls._id.value, participant._id).subscribe(
            () => { }, (error) => { this.showAlert(error) });
        }
        this.dismissModal();
      }
    }
  }

  async showAlert(err) {
    const alert = await this.alertController.create({
      header: 'Fehler',
      message: err.error.msg.message.message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showSuccess() {
    const toast = await this.toastController.create({
      message: 'Das Spiel wurde erfolgreich angelegt',
      duration: 2000
    });
    toast.present();
  }

  dismissModal() {
    this.modalController.dismiss('dataChanged');
  }

}



