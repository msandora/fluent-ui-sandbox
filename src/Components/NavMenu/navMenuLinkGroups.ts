import { INavLinkGroup } from '@fluentui/react/lib/Nav';

export const navMenuLinkGroups: INavLinkGroup[] = [
    {
        name: 'Buys',
        collapseByDefault: true,
        links: [
            {
                name: 'TV Spot Buys',
                icon: 'TVMonitor',
                url: '/TVSpotBuys'
            },
            {
                name: 'Infomercial Buys',
                icon: 'MyMoviesTV',
                url: '/InfomercialBuys'
            },
            {
                name: "Cost Per Inquiry Buys",
                icon: 'SurveyQuestions',
                url: '/CostPerInquiryBuys'
            }
        ]
    },
    {
        name: 'Dub House',
        collapseByDefault: true,
        links: [
            {
                name: 'Creative',
                icon: 'Video',
                url: '/videoproductions'
            },
            {
                name: 'Dub Requests',
                icon: 'Inbox',
                url: '/videodubrequests'
            }
        ]
    },
    {
        name: 'Tracking & Attribution',
        collapseByDefault: true,
        links: [
            {
                name: 'DNIS Master List',
                icon: 'phone',
                url: '/dnis'
            },
            {
                name: 'DNIS Requests',
                icon: 'Inbox',
                url: '/dnisrequest'
            }
        ]
    },
    {
        name: 'Campaign Management',
        collapseByDefault: true,
        links: [
            {
                name: 'Clients',
                icon: 'People',
                url: '/clients'
            },
            {
                name: 'Products',
                icon: 'ShoppingCart',
                url: '/products'
            },
            {
                name: 'Campaigns',
                icon: 'Megaphone',
                url: '/Campaigns'
            },
        ]
    },
    {
        name: 'Account Management',
        collapseByDefault: true,
        links: [
            {
                name: 'Accounts',
                icon: 'AccountManagement',
                url: '/accounts'
            },
            {
                name: 'Agencies',
                icon: 'Home',
                url: '/agencies'
            },
            {
                name: 'Sources',
                icon: 'Database',
                url: '/sources'
            },
            {
                name: 'Markets',
                icon: 'MapPin',
                url: '/markets'
            },
            {
                name: 'Talent',
                icon: 'UserFollowed',
                url: '/talent'
            }
        ]
    },
    {
        name: 'System Administration',
        collapseByDefault: true,
        links: [
            {
                name: 'Agency Settings',
                icon: 'Settings',
                url: '#'
            },
            {
                name: 'Users',
                icon: 'FollowUser',
                url: '/users'
            }
        ]
    }
];
