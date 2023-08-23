import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';

i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
      {
        id: 'pages.authentication',
        title: 'اطلاعات پایه',
        type: 'collapse',
        children: [
          {
            id: 'pages.authentication.sign-in',
            title: 'تعریف درختواره سازمانی',
            type: 'item',
            
          },
          {
            id: 'pages.authentication.sign-up',
            title: 'تعریف سامانه',
            type: 'item',
            url: '/pages/system',
          },
          {
            id: 'pages.authentication.sign-out',
            title: 'تعریف لاگ',
            type: 'item',

          },
          {
            id: 'pages.authentication.forgot-password',
            title: 'تعریف / تایید عامل',
            type: 'item',
          },

        ],
      },
      {
        id: 'pages.coming-soon',
        title: 'عملیات اصلی',
        type: 'collapse',
        url: '/pages/coming-soon',
        children: [
          {
            id: 'pages.coming-soon.classic',
            title: 'تست',
            type: 'item',
            url: '',
          },

        ],
      },
      {
        id: 'pages.error',
        title: 'تنظیمات',
        type: 'collapse',
        children: [
          {
            id: 'pages.error.404',
            title: 'تست',
            type: 'item',
            url: '',
          },

        ],
      },
   
];

export default navigationConfig;
