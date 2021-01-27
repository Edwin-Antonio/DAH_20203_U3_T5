import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NewStudentPageRoutingModule } from './new-student-routing.module';

import { NewStudentPage } from './new-student.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewStudentPageRoutingModule
  ],
  declarations: [NewStudentPage]
})
export class NewStudentPageModule {}
