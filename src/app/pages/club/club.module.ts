import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubPageRoutingModule } from './club-routing.module';

import { ClubPage } from './club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClubPageRoutingModule
  ],
  declarations: [ClubPage]
})
export class ClubPageModule { }
