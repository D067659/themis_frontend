import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController, IonDatetime, ModalController, NavParams, ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.page.html',
  styleUrls: ['./newmatch.page.scss'],
})
export class NewmatchPage implements OnInit {
  players: any = [];
  matchForm: FormGroup;
  minDate = new Date().toISOString();
  formattedDate = '';
  isSubmitted: boolean = false;
  matchInput;
  loaded = false;
  @ViewChild(IonDatetime) datetime: IonDatetime;

  constructor(
    public formBuilder: FormBuilder,
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
      this.apiService.getAllParticipations(this.apiService.currentUser.selectedClub._id, existingMatch._id).subscribe((participations: any) => {
        // Map participations to players
        this.players.forEach((player, index, arr) => {
          const playerParticipation = participations.find(participation => participation.playerId == player._id) || 'not asked';
          arr[index].participation = playerParticipation;
        });
        this.loaded = true;
      });
    };

    this.matchForm = this.formBuilder.group({
      city: [existingMatch?.city, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      opponent: [existingMatch?.opponent, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      startDate: [existingMatch ? existingMatch.startDate : this.minDate],
      isHome: [existingMatch?.isHome ? true : false],
      meetingPoint: [existingMatch?.meetingPoint, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      clubId: [existingMatch?.clubId ? existingMatch?.clubId : this.apiService.currentUser.selectedClub._id],
      _id: [existingMatch?._id]
    });

    this.setFormattedDate();
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

  get errorControl() {
    return this.matchForm.controls;
  }

  submitForm() {
    // ADD CLUBID RIGHT HERE
    this.isSubmitted = true;
    if (!this.matchForm.valid) { return false; };

    let match = this.matchForm.value;

    if (this.minDate > match.startDate) {
      this.matchForm.get('startDate').setErrors({ serverValidationError: true });
      return this.showAlert({ error: { msg: { message: { message: 'Das Datum darf nicht in der Vergangenheit liegen.' } } } })
    }

    if (match._id == null) { // new match
      delete match._id;
      this.apiService.createMatch(match).subscribe((res: any) => {
        // Add creator to participants, otherwise nobody could see this game due to missing participants
        this.apiService.setParticipationForMatch(res.clubId, res._id, null).subscribe((res: any) => {
          this.showSuccess();
          this.dismissModal(true);
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
      this.dismissModal(true);
    }
  }

  setFormattedDate() {
    this.formattedDate = format(parseISO(this.matchForm.get('startDate').value), 'HH:mm, d. MMM yyyy');
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

  dismissModal(refreshPage?) {
    this.modalController.dismiss(refreshPage);
  }

  closeDateTimePicker() {
    this.datetime.cancel(true);
  }

  selectDateTimePicker() {
    this.datetime.confirm(true);
  }

  // Easy access for form fields
  get city() {
    return this.matchForm.get('city');
  }

  get opponent() {
    return this.matchForm.get('opponent');
  }

  get meetingPoint() {
    return this.matchForm.get('meetingPoint');
  }

}



