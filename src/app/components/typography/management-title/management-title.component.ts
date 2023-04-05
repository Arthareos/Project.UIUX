import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management-title',
  templateUrl: './management-title.component.html',
  styleUrls: ['./management-title.component.scss']
})
export class ManagementTitleComponent {
    @Input("text") text = '';
}
