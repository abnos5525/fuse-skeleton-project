import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';

i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
      {
        id: 'pages.information',
        title: 'اطلاعات پایه',
        type: 'collapse',
        children: [
          {
            id: 'pages.information.tree',
            title: 'تعریف درختواره سازمانی',
            type: 'item',
            
          },
          {
            id: 'pages.information.system',
            title: 'تعریف سامانه',
            type: 'item',
            url: '/pages/system',
          },
          {
            id: 'pages.information.log',
            title: 'تعریف لاگ',
            type: 'item',
            url: '/pages/log',
          },
          {
            id: 'pages.information.acception',
            title: 'تعریف / تایید عامل',
            type: 'item',
          },

        ],
      },

      {
        id: 'pages.operation',
        title: 'عملیات اصلی',
        type: 'collapse',
        children: [
          {
            id: 'pages.operation.test',
            title: 'تست',
            type: 'item',
          },
        ],
      },

      {
        id: 'pages.settings',
        title: 'تنظیمات',
        type: 'collapse',
        children: [
          {
            id: 'pages.settings.test',
            title: 'تست',
            type: 'item',
          },
        ],
      },
     
   
];

export default navigationConfig;
