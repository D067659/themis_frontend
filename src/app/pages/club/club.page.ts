import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})


export class ClubPage implements OnInit {

  clubs = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    for (const club of this.apiService.currentUser.clubs) {
      this.apiService.getClubInformation(club.clubId).subscribe((res: any) => {
        this.clubs.push(res)
      });
    }
  }

}
