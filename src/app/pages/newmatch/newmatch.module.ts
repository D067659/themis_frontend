import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NewmatchPageRoutingModule } from './newmatch-routing.module';

import { NewmatchPage } from './newmatch.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewmatchPageRoutingModule,
    NgPipesModule
  ],
  declarations: [NewmatchPage]
})
export class NewmatchPageModule { }
