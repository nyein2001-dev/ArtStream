import { Component } from '@angular/core';
import { ShopHeaderComponent } from '../../components/shop/shop-header/shop-header.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopHeaderComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
