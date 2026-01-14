import { Calendar } from 'lucide-react';

const BookMeetingButton = () => {
   return (
      <button className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-2 px-4 py-3 bg-pink-500 text-primary-foreground rounded-lg font-medium shadow-lg hover:bg-pink-600 transition-all hover:shadow-xl">
         <Calendar className="w-5 h-5" />
         <span className="hidden sm:inline">Book a Meeting</span>
      </button>
   );
};

export default BookMeetingButton;
