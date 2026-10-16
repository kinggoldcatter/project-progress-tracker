import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-technology-checklist',
  styleUrl: './technology-checklist.css',
  templateUrl: './technology-checklist.html',
})
export class TechnologyChecklist {
  checklistComplete = false;
  buttonName = 'Mark Checklist Completel';
  completeChecklist() {
    this.checklistComplete = true;
    this.buttonName = 'Checklist Completed';
  }
}

