import { Calendar } from 'lucide-react';

const BookMeetingButton = () => {
   return (
      <button className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl">
         <Calendar className="w-5 h-5" />
         <span className="hidden sm:inline">Book a Meeting</span>
      </button>
   );
};

export default BookMeetingButton;
