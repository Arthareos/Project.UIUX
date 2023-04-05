import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management-button',
  templateUrl: './management-button.component.html',
  styleUrls: ['./management-button.component.scss']
})
export class ManagementButtonComponent {
    @Input("text") buttonText = '';
}
