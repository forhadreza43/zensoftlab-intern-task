import { createBrowserRouter } from 'react-router';
// import { createElement } from 'react';
import rootLayout from '@/layout/rootLayout';
import NotFound from '@/pages/NotFound';
import Index from '@/pages';

const router = createBrowserRouter([
   {
      path: '/',
      Component: rootLayout,
      children: [
         {
            index: true,
            Component: Index,
         },
      ],
   },
   {
      path: '*',
      Component: NotFound,
   },
]);

export default router;
