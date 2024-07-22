import { MenuItem } from "../models/menu.model";

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
                        {
                            label: 'Nfts',
                            route: '/dashboard/nfts'
                        }
                    ],
                },
                {
                    icon: 'assets/icons/lock-closed.svg',
                    label: 'Auth',
                    route: '/auth',
                    children: [
                        {
                            label: 'Sign up',
                            route: '/auth/sign-up'
                        },
                        {
                            label: 'Sign in',
                            route: '/auth/sign-in'
                        },
                        {
                            label: 'Forgot Password',
                            route: '/auth/forgot-password'
                        },
                        {
                            label: 'New Password',
                            route: '/auth/new-password'
                        },
                        {
                            label: 'Two Steps',
                            route: '/auth/two-steps'
                        }
                    ]
                },
                {
                    icon: 'assets/icons/shield-exclamation.svg',
                    label: 'Errors',
                    route: '/errors',
                    children: [
                        {
                            label: '404',
                            route: '/errors/404'
                        },
                        {
                            label: '500',
                            route: '/errors/500'
                        }
                    ]
                }
            ]
        }
    ]
}