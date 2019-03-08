import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListDieselPage } from './list-diesel.page';
import {MatTableModule} from '@angular/material';

const routes: Routes = [
  {
    path: 'list',
    component: ListDieselPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  declarations: [ListDieselPage]
})
export class ListDieselPageModule {}
