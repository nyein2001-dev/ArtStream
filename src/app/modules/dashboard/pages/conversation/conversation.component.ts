import { Component } from '@angular/core';
import { ConversationHeaderComponent } from '../../components/conversation/conversation-header/conversation-header.component';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [ConversationHeaderComponent],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {

}
