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
          route: '/dashboard/home',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Podcasts',
          route: '/dashboard/podcast',
        },
        {
          icon: 'assets/icons/heroicons/outline/notification.svg',
          label: 'Notifications',
          route: '/dashboard/notifications',
        },
        {
          icon: 'assets/icons/heroicons/outline/heart.svg',
          label: 'Shop',
          route: '/dashboard/shop',
        },
        {
          icon: 'assets/icons/heroicons/outline/conversation.svg',
          label: 'Conversation',
          route: '/dashboard/conversation',
        },
        {
          icon: 'assets/icons/heroicons/outline/wallet.svg',
          label: 'Wallet',
          route: '/dashboard/wallet',
        },
        {
          icon: 'assets/icons/heroicons/outline/favorite.svg',
          label: 'Subscription',
          route: '/dashboard/subscription',
        },
        {
          icon: 'assets/icons/heroicons/outline/profile.svg',
          label: 'My Profile',
          route: '/dashboard/profile',
        },
        {
          icon: 'assets/icons/heroicons/outline/setting.svg',
          label: 'Settings',
          route: '/dashboard/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/logout.svg',
          label: 'Logout',
          route: '/auth/sign-in',
        },
      ],
    },
  ];
}
