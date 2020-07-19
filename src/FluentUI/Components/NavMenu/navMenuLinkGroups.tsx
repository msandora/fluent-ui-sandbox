import { INavLinkGroup } from '@fluentui/react/lib/Nav';

export const navMenuLinkGroups: INavLinkGroup[] = [
  {
    name: 'Buys',
    collapseByDefault: true,
    links: [
      {
        name: 'TV Spot Buys',
        icon: 'TVMonitor',
        url: '/fluent/TVSpotBuys',
      },
      {
        name: 'Infomercial Buys',
        icon: 'MyMoviesTV',
        url: '/fluent/InfomercialBuys',
      },
      {
        name: 'Cost Per Inquiry Buys',
        icon: 'SurveyQuestions',
        url: '/fluent/CostPerInquiryBuys',
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
        url: '/fluent/videoproductions',
      },
      {
        name: 'Dub Requests',
        icon: 'Inbox',
        url: '/fluent/videodubrequests',
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
        url: '/fluent/dnis',
      },
      {
        name: 'DNIS Requests',
        icon: 'Inbox',
        url: '/fluent/dnisrequest',
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
        url: '/fluent/clients',
      },
      {
        name: 'Products',
        icon: 'ShoppingCart',
        url: '/fluent/products',
      },
      {
        name: 'Campaigns',
        icon: 'Megaphone',
        url: '/fluent/Campaigns',
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
        url: '/fluent/accounts',
      },
      {
        name: 'Agencies',
        icon: 'Home',
        url: '/fluent/agencies',
      },
      {
        name: 'Sources',
        icon: 'Database',
        url: '/fluent/sources',
      },
      {
        name: 'Markets',
        icon: 'MapPin',
        url: '/fluent/markets',
      },
      {
        name: 'Talent',
        icon: 'UserFollowed',
        url: '/fluent/talent',
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
