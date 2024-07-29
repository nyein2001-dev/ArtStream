import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile/profile-header/profile-header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
