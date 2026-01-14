import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router';

type QuickLinkItem = {
   label: string;
   icon?: React.ComponentType<{ className?: string }>;
   href: string;
};

type QuickLinkSection = {
   title: string;
   links: QuickLinkItem[];
};

type FooterAccordionData = {
   data: QuickLinkSection;
};

export function FooterAccordion({ data }: FooterAccordionData) {
   return (
      <Accordion type="single" collapsible className="w-full">
         <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold uppercase">
               {data.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
               {data.links.map((link, index) => (
                  <Link
                     key={index}
                     to={link.href}
                     className="text-primary-foreground hover:underline flex items-center gap-1"
                  >
                     {link.icon && (
                        <link.icon className="w-5 h-5 inline-block" />
                     )}
                     {link.label}
                  </Link>
               ))}
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   );
}
