import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsonData from '../../../assets/placeholder-tasks.json'


@Component({
  selector: 'app-management-edit-task',
  templateUrl: './management-edit-task.component.html',
  styleUrls: ['./management-edit-task.component.scss']
})
export class ManagementEditTaskComponent implements OnInit {
    
    public task: any;

    constructor(
        private _router: Router,
        private activatedRoute: ActivatedRoute
        ) { }

    ngOnInit(): void {
        let taskId = this.activatedRoute.snapshot.paramMap.get('id');
        let object = jsonData.find(elem => elem.id == taskId);

        if (object == null)
            this._router.navigateByUrl('');

        this.task = object;
    }
}
