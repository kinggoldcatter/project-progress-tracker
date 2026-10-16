import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {

  progressNote = '';

  ProgressForm = new FormGroup({
      projectName: new FormControl(''),
      date: new FormControl(''),
      currentStatus: new FormControl('Completed'),
      teamMember: new FormControl(''),
      progressNote: new FormControl('')

  });}
