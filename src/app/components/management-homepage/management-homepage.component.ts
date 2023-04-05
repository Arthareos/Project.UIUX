import { Component } from '@angular/core';
import jsonData from '../../../assets/placeholder-tasks.json'

@Component({
  selector: 'app-management-homepage',
  templateUrl: './management-homepage.component.html',
  styleUrls: ['./management-homepage.component.scss']
})
export class ManagementHomepageComponent {
    
    public tasks = jsonData;

    constructor() {
        console.log(jsonData);
    }
}
