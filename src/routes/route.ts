import { createBrowserRouter } from 'react-router';
// import { createElement } from 'react';
import rootLayout from '@/layout/rootLayout';
import NotFound from '@/pages/NotFound';
import Index from '@/pages';
import Services from '@/pages/Services';

const router = createBrowserRouter([
   {
      path: '/',
      Component: rootLayout,
      children: [
         {
            index: true,
            Component: Index,
         },
         {
            path: 'services',
            Component: Services,
         },
      ],
   },
   {
      path: '*',
      Component: NotFound,
   },
]);

export default router;
