import { INavLinkGroup } from '@fluentui/react/lib/Nav';

export const navMenuLinkGroups: INavLinkGroup[] = [
  {
    name: 'Buys',
    collapseByDefault: true,
    links: [
      {
        name: 'TV Spot Buys',
        icon: 'TVMonitor',
        url: '/fluent',
      },
      {
        name: 'Infomercial Buys',
        icon: 'MyMoviesTV',
        url: '/fluent',
      },
      {
        name: 'Cost Per Inquiry Buys',
        icon: 'SurveyQuestions',
        url: '/fluent',
      },
    ],
  },
  {
    name: 'Dub House',
    collapseByDefault: true,
    links: [
      {
        name: 'Creative',
        icon: 'Video',
        url: '/fluent',
      },
      {
        name: 'Dub Requests',
        icon: 'Inbox',
        url: '/fluent',
      },
    ],
  },
  {
    name: 'Tracking & Attribution',
    collapseByDefault: true,
    links: [
      {
        name: 'DNIS Master List',
        icon: 'phone',
        url: '/fluent',
      },
      {
        name: 'DNIS Requests',
        icon: 'Inbox',
        url: '/fluent',
      },
    ],
  },
  {
    name: 'Campaign Management',
    collapseByDefault: true,
    links: [
      {
        name: 'Clients',
        icon: 'People',
        url: '/fluent',
      },
      {
        name: 'Products',
        icon: 'ShoppingCart',
        url: '/fluent',
      },
      {
        name: 'Campaigns',
        icon: 'Megaphone',
        url: '/fluent',
      },
    ],
  },
  {
    name: 'Account Management',
    collapseByDefault: true,
    links: [
      {
        name: 'Accounts',
        icon: 'AccountManagement',
        url: '/fluent',
      },
      {
        name: 'Agencies',
        icon: 'Home',
        url: '/fluent',
      },
      {
        name: 'Sources',
        icon: 'Database',
        url: '/fluent',
      },
      {
        name: 'Markets',
        icon: 'MapPin',
        url: '/fluent',
      },
      {
        name: 'Talent',
        icon: 'UserFollowed',
        url: '/fluent',
      },
    ],
  },
  {
    name: 'System Administration',
    collapseByDefault: true,
    links: [
      {
        name: 'Agency Settings',
        icon: 'Settings',
        url: '/fluent/testing',
      },
      {
        name: 'Users',
        icon: 'FollowUser',
        url: '/fluent/users',
      },
    ],
  },
];
