import { Component } from '@angular/core';
import { NotificationHeaderComponent } from '../../components/notification/notification-header/notification-header.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NotificationHeaderComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

}
