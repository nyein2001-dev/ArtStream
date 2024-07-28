import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: NftComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: 'notifications', component: NotificationComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'conversation', component: ConversationComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'subscription', component: SubscriptionComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'setting', component: SettingComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
