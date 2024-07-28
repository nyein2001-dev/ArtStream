import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Home',
          route: '/home',
        },
        {
          icon: 'assets/icons/heroicons/outline/notification.svg',
          label: 'Notifications',
          route: '/notifications',
        },
        {
          icon: 'assets/icons/heroicons/outline/heart.svg',
          label: 'Shop',
          route: '/shop',
        },
        {
          icon: 'assets/icons/heroicons/outline/conversation.svg',
          label: 'Conversation',
          route: '/conversation',
        },
        {
          icon: 'assets/icons/heroicons/outline/wallet.svg',
          label: 'Wallet',
          route: '/wallet',
        },
        {
          icon: 'assets/icons/heroicons/outline/favorite.svg',
          label: 'Subscription',
          route: '/subscription',
        },
        {
          icon: 'assets/icons/heroicons/outline/profile.svg',
          label: 'My Profile',
          route: '/profile',
        },
        {
          icon: 'assets/icons/heroicons/outline/setting.svg',
          label: 'Settings',
          route: '/setting',
        },
        {
          icon: 'assets/icons/heroicons/outline/logout.svg',
          label: 'Logout',
          route: '/logout',
        },
      ],
    },
  ];
}
