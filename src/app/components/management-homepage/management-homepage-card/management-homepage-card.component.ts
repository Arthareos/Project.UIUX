import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-homepage-card',
  templateUrl: './management-homepage-card.component.html',
  styleUrls: ['./management-homepage-card.component.scss']
})
export class ManagementHomepageCardComponent {
    @Input('id') id = '';
    @Input('title') title = '';
    @Input('description') description = '';
    @Input('priority') priority = '';
    @Input('isFinished') isFinished = '';

    constructor(private _router: Router) {}

    navigate(id: any) {
        console.log(`route to ${id} triggered`);
        this._router.navigateByUrl(`/${id}`);
    }
}
