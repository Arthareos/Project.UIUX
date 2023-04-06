import {Component, OnInit} from '@angular/core';
import jsonData from '../../../assets/placeholder-tasks.json'
import {ManagementTaskService} from "../../services/management-task/management-task.service";

@Component({
  selector: 'app-management-homepage',
  templateUrl: './management-homepage.component.html',
  styleUrls: ['./management-homepage.component.scss']
})
export class ManagementHomepageComponent implements OnInit {

    public tasks = jsonData;

    constructor(private managementTaskService: ManagementTaskService) {
          console.log(jsonData);
      }

    ngOnInit() {
      this.managementTaskService.getTasks('1').subscribe({
        next: (response: any) => {
          console.log(response);
          this.tasks = response;
        }
      })
    }
}
