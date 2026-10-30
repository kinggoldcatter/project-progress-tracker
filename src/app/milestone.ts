import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Milestone {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {
  // Express API endpoint.
  private apiUrl = 'http://localhost:8000/milestones';

  constructor(private http: HttpClient) {}

  // Retrive milestones using GET.
  getMilestones(): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(this.apiUrl);
  }

  // Submit new milestoen information.
  addMilestone(name: string, status: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      name: name,
      status: status
    });
  }
}
