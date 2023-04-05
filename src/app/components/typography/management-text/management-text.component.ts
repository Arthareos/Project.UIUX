import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management-text',
  templateUrl: './management-text.component.html',
  styleUrls: ['./management-text.component.scss']
})
export class ManagementTextComponent {
    @Input("text") text = '';
}
