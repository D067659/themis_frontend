import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NewmatchPageRoutingModule } from './newmatch-routing.module';

import { NewmatchPage } from './newmatch.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewmatchPageRoutingModule
  ],
  declarations: [NewmatchPage]
})
export class NewmatchPageModule { }
