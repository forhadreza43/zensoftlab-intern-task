import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
   {
      question: 'Why should I choose nopCommerce for my eCommerce business?',
      answer:
         "nopCommerce gives your store flexibility, scalability, and total ownership. It's open-source, secure, and built to grow with your business whether you're just launching or managing thousands of products.",
   },
   {
      question: 'What kind of nopCommerce solutions can I get for my business?',
      answer:
         'You can get everything from a new store setup and theme design to plugin customization, payment integration, and upgrade support - all tailored to your needs.',
   },
   {
      question:
         'Can nopCommerce handle my growing product range or multi-store setup?',
      answer:
         'Yes. nopCommerce easily supports multi-store management, large product catalogs, and different pricing or shipping rules - perfect as your business scales.',
   },
   {
      question: 'How long does it take to launch my nopCommerce store?',
      answer:
         'A standard store usually takes 4-6 weeks, while a more complex, fully customized site might take 8-12 weeks depending on design and integrations.',
   },
   {
      question:
         'Will I be able to manage my nopCommerce site myself after launch?',
      answer:
         'Yes. nopCommerce includes an easy admin panel where you can update products, track orders, manage discounts, and handle everything without coding.',
   },
   {
      question: 'What happens after my website goes live?',
      answer:
         "You'll get ongoing support for updates, bug fixes, performance tuning, and plugin maintenance so your eCommerce site runs smoothly.",
   },
   {
      question: 'Can nopCommerce connect with my ERP, CRM, or payment systems?',
      answer:
         'Yes it integrates with Microsoft Dynamics, SAP, Salesforce, PayPal, Stripe, and other third-party systems to automate operations.',
   },
];

const FAQSection = () => {
   return (
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 gradient-hero" />

         <div className="relative z-10 container mx-auto px-4">
            <h2 className="section-title text-center mb-12">
               Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto">
               <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                     <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="glass-card rounded-xl px-6 border-none"
                     >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 hover:no-underline">
                           {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                           {faq.answer}
                        </AccordionContent>
                     </AccordionItem>
                  ))}
               </Accordion>
            </div>
         </div>
      </section>
   );
};

export default FAQSection;
