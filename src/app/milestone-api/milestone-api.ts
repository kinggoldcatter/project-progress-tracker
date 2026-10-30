import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MilestoneService, Milestone } from '../milestone';
@Component({
  selector: 'app-milestone-api',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule],
  templateUrl: './milestone-api.html',
  styleUrl: './milestone-api.css'
})
export class MilestoneApi implements OnInit {
  // Holds the asynchronous server response.
  milestones$!: Observable<Milestone[]>;

  // fom for enetering a new milestone.
  milestoneForm = new FormGroup ({
    name: new FormControl(''),
    status: new FormControl('Not Started')
  });

  // Server confirmation message.
  message = '';

  constructor(private milestoneService:  MilestoneService) {}

  // Load milestones when the component starts.
  ngOnInit(): void {
      this.loadMilestones();
  }

  //Call the Angular service
  loadMilestones(): void{
    this.milestones$ = this.milestoneService.getMilestones();
  }

  //Submit milestone information to Express.
  onSubmit(): void {

    // Read the form values
    const name = this.milestoneForm.value.name ?? '';
    const status = this.milestoneForm.value.status ?? '';

    // Send the Post request.
    this.milestoneService.addMilestone(name, status)
      .subscribe({
        next: (response) => {
          this.message = response.message;
          console.log('Server response:', response);
        },
        error: (error) => {
          this.message = 'unable to submit milestone.';
          console.error('POST request failed:', error);
        }
      });
  }
}
