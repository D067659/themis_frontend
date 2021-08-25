import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalController, NavParams } from '@ionic/angular';
import { from, of } from 'rxjs';
import { mergeMap, map, toArray, delay } from 'rxjs/operators';

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

  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private modalController: ModalController, private navParams: NavParams
  ) { }

  mapPlayerParticipation(param) {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }

  ngOnInit() {
    // Get all possible players for selected club
    this.apiService.getPlayersForClub(this.apiService.currentUser.selectedClub._id).subscribe((players: any) => {
      this.players = players
    });

    // Check if edit match mode and set model accordingly
    let existingMatch = this.navParams.get('existingMatch');
    if (existingMatch) {
      const dateParts = existingMatch.startDate.split('T');
      existingMatch.startDateShort = dateParts[0];
      existingMatch.startTime = dateParts[1];

      // Check for existing participations
      this.apiService.getAllParticipations(this.apiService.currentUser.selectedClub._id, existingMatch._id).subscribe((participations: any) => {
        // Map participations to players

        this.players.forEach((player, index, arr) => {
          const playerParticipation = participations.find(participation => participation.playerId == player._id);
          arr[index].participation = playerParticipation;
        });
      });
    };

    this.matchForm = this.formBuilder.group({
      city: [existingMatch?.city, [Validators.required, Validators.minLength(4)]],
      opponent: [existingMatch?.opponent, [Validators.required, Validators.minLength(5)]],
      startDate: [existingMatch ? existingMatch.startDateShort : this.minDate],
      startTime: [existingMatch ? existingMatch.startTime : '18:00'],
      isHome: [existingMatch?.isHome],
      meetingPoint: [existingMatch?.meetingPoint, [Validators.required, Validators.minLength(5)]],
      participants: ['', [Validators.required]]
    })
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
      console.log(this.matchForm.value)
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}



