import { MenuItem } from '../models/menu.model';

export class Menu {
    public static pages: MenuItem[] = [
        {
            group: 'Base',
            separator: false,
            items: [
                {
                    icon: 'assets/icons/chart-pie.svg',
                    label: 'Dashboard',
                    route: '/dashboard',
                    children: [
                        { label: 'Nfts', route: '/dashboard/nfts' },
                        { label: 'Podcast', route: '/dashboard/podcast' },
                    ],
                },
                {
                    icon: 'assets/icons/lock-closed.svg',
                    label: 'Auth',
                    route: '/auth',
                    children: [
                        { label: 'Sign up', route: '/auth/sign-up' },
                        { label: 'Sign in', route: '/auth/sign-in' },
                        { label: 'Forgot Password', route: '/auth/forgot-password' },
                        { label: 'New Password', route: '/auth/new-password' },
                        { label: 'Two Steps', route: '/auth/two-steps' },
                    ],
                },
                {
                    icon: 'assets/icons/shield-exclamation.svg',
                    label: 'Erros',
                    route: '/errors',
                    children: [
                        { label: '404', route: '/errors/404' },
                        { label: '500', route: '/errors/500' },
                    ],
                },
            ],
        },
        {
            group: 'Collaboration',
            separator: true,
            items: [
                {
                    icon: 'assets/icons/download.svg',
                    label: 'Download',
                    route: '/download',
                },
                {
                    icon: 'assets/icons/gift.svg',
                    label: 'Gift Card',
                    route: '/gift',
                },
                {
                    icon: 'assets/icons/users.svg',
                    label: 'Users',
                    route: '/users',
                },
            ],
        },
        {
            group: 'Config',
            separator: false,
            items: [
                {
                    icon: 'assets/icons/cog.svg',
                    label: 'Settings',
                    route: '/settings',
                },
                {
                    icon: 'assets/icons/bell.svg',
                    label: 'Notifications',
                    route: '/gift',
                },
                {
                    icon: 'assets/icons/folder.svg',
                    label: 'Folders',
                    route: '/folders',
                    children: [
                        { label: 'Current Files', route: '/folders/current-files' },
                        { label: 'Downloads', route: '/folders/download' },
                        { label: 'Trash', route: '/folders/trash' },
                    ],
                },
            ],
        },
    ];
}
