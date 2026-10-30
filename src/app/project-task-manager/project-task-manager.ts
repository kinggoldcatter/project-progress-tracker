import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet, NgClass, NgStyle } from '@angular/common';
import { TaskStatusImage } from '../task-status-image';

@Component({
  imports: [FormsModule,
    NgTemplateOutlet,
    NgClass,
    NgStyle,
    TaskStatusImage
  ],
  selector: 'app-project-task-manager',
  styleUrl: './project-task-manager.css',
  templateUrl: './project-task-manager.html',
})
export class ProjectTaskManager {
  taskName = 'Design User Interface';

  taskCompleted = true;

  taskStatus = 'In Progress';

  tasks = [
  'Design User Interface',
  'Create Database',
  'Develop API',
  'Test Application'
];

  newTask = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  teamMembersJSON = `[
  { "firstName": "John", "lastName": "Dow" },
  { "firstName": "Ann", "lastName": "Smith" },
  { "firstName": "Joan", "lastName": "Doe" }
]`;

  teamMembers = JSON.parse(this.teamMembersJSON)


  showReviewMessage = true;

}
