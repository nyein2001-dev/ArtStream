import { Component } from '@angular/core';
import { WalletHeaderComponent } from '../../components/wallet/wallet-header/wallet-header.component';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [WalletHeaderComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

}
