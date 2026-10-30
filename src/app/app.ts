import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MilestoneTracker } from './milestone-tracker/milestone-tracker';
import { ProgressNotes } from './progress-notes/progress-notes';
import { ProjectOverview } from './project-overview/project-overview';
import { TechnologyChecklist } from './project-overview/technology-checklist/technology-checklist';
import { ProjectTaskManager } from './project-task-manager/project-task-manager';
import { MilestoneApi } from './milestone-api/milestone-api';
@Component({
  imports: [
    RouterOutlet,
    MilestoneTracker,
    ProgressNotes,
    ProjectOverview,
    TechnologyChecklist,
    ProjectTaskManager,
    MilestoneApi
    ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project-progress-tracker');
}
