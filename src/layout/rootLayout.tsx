import { Outlet } from 'react-router';

export default function rootLayout() {
   return (
      <div>
         <Outlet />
      </div>
   );
}
