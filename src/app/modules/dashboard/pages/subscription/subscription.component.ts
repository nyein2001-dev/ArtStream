import { Component } from '@angular/core';
import { SubscriptionHeaderComponent } from '../../components/subscription/subscription-header/subscription-header.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [SubscriptionHeaderComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {

}
