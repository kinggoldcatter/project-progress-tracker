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

  progressNote = 'Initial progress note';

  // ProgressForm = new FormGroup({
  //     projectName: new FormControl(''),
  //     date: new FormControl(''),
  //     currentStatus: new FormControl('Completed'),
  //     teamMember: new FormControl(''),
  //     progressNote: new FormControl('')

  // });

  projectName2 = 'help';
  projectCode = new FormControl();

  codeInput() {
    this.projectName2 = this.projectCode.value
   switch (this.projectCode.value) {
     case 'PPT101':
        this.projectName2 = 'Project Progress Tracker'
   };
  }
}
