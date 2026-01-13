import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {  RouterProvider } from 'react-router';
import router from './routes/route';


const queryClient = new QueryClient();

const App = () => (
   <QueryClientProvider client={queryClient}>
      <TooltipProvider>
         <Toaster />
         <RouterProvider router={router} />
      </TooltipProvider>
   </QueryClientProvider>
);

export default App;
