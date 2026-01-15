import { useState, useRef } from 'react';
import {
   Settings,
   Smartphone,
   Palette,
   Server,
   Zap,
   ShoppingBag,
   ArrowRight,
   Mail,
   MessageCircle,
   Ticket,
} from 'lucide-react';
import {
   Breadcrumb,
   BreadcrumbList,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbSeparator,
   BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
   {
      title: 'Customization Service',
      description:
         "Customized solutions to boost your eCommerce store's performance",
      icon: Settings,
      details:
         'We provide tailored customization services to enhance your platform functionality and user experience.',
   },
   {
      title: 'Mobile App Development',
      description:
         'End-to-end mobile app development services for both Android and iOS',
      icon: Smartphone,
      details:
         'Our expert team develops high-performance native and cross-platform mobile applications.',
   },
   {
      title: 'Theme Design & Plugin Development',
      description:
         'Enhance your storefront with custom nopCommerce Themes & Plugins',
      icon: Palette,
      details:
         'Create stunning storefronts with our custom theme and plugin development services.',
   },
   {
      title: 'ERP Solutions with Odoo',
      description:
         'Streamline your business operations with Odoo ERP solutions',
      icon: Server,
      details:
         'Implement comprehensive ERP systems to manage all your business processes efficiently.',
   },
   {
      title: 'Optimizely Development',
      description: 'Professional Optimizely development for your website',
      icon: Zap,
      details:
         'Optimize your digital experiences with our Optimizely expertise and best practices.',
   },
   {
      title: 'Shopify Development',
      description:
         'Transform your eCommerce store with custom Shopify development',
      icon: ShoppingBag,
      details:
         'Build powerful Shopify stores with custom apps, themes, and integrations.',
   },
];

export default function Services() {
   const containerRef = useRef<HTMLDivElement>(null);

   return (
      <div className="min-h-screen bg-background">
         <Header />
         {/* Breadcrumb Navigation */}
         <div className="bg-muted/70 py-4  pt-25">
            <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
               <Breadcrumb>
                  <BreadcrumbList>
                     <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator />
                     <BreadcrumbItem>
                        <BreadcrumbPage>OUR SERVICES</BreadcrumbPage>
                     </BreadcrumbItem>
                  </BreadcrumbList>
               </Breadcrumb>
               <h1 className="text-2xl font-semibold text-primary py-2">
                  Our Services
               </h1>
            </div>
         </div>

         {/* Services Grid */}
         <section className="py-6">
            <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
               <div
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
               >
                  {services.map((service) => {
                     const IconComponent = service.icon;
                     return (
                        <div
                           key={service.title}
                           className="group relative h-full"
                        >
                           <div
                              style={{
                                 boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                              }}
                              className="relative h-full p-6 md:p-8 transition-all duration-300 hover:bg-cyan-500 group"
                           >
                              {/* Icon */}
                              <div className="inline-flex relative items-center justify-center w-14 h-14 rounded-full bg-muted mb-6 group-hover:bg-primary-foreground transition-colors duration-300">
                                 <IconComponent className="w-12 h-12 text-primary absolute right-0 translate-x-2" />
                              </div>

                              {/* Content */}
                              <h3 className=" font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary-foreground transition-colors duration-300">
                                 {service.title}
                              </h3>

                              <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-primary-foreground transition-colors duration-300">
                                 {service.description} {service.details}{' '}
                                 {service.details} {service.details}
                              </p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
         <section className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            <div className="relative overflow-hidden bg-linear-to-br from-[#16255f] via-[#182a6b] to-[#0f1c4d] lg:px-16 px-10 py-12 lg:py-8">
               <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 items-center gap-12">
                  {/* LEFT: Content */}
                  <div className="text-white">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                        Contact Us <br /> for zensoftCommerce Customization and fix quotes
                     </h2>

                     <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-center">
                        <div className="flex flex-col gap-4 max-w-sm md:mr-10">
                           {/* Live Chat */}
                           <button className="flex text-nowrap items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#16255f] shadow hover:scale-[1.02] transition">
                              <MessageCircle className="h-5 w-5 text-green-500" />
                              Live Chat
                           </button>
                           {/* Create Ticket */}
                           <button className="flex text-nowrap items-center gap-3 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-600 transition">
                              <Ticket className="h-5 w-5" />
                              Create Ticket
                           </button>
                           {/* Contact */}
                           <button className="flex text-nowrap items-center gap-3 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 transition">
                              <Mail className="h-5 w-5" />
                              Contact Us
                           </button>
                        </div>
                        {/* Divider */}
                        <div className=" h-45 w-0.5  bg-white/20 hidden md:block" />
                        {/* Contact Details */}
                        <div className="space-y-4 md:text-lg lg:text-xl md:ml-10">
                           <p>
                              <span className="font-semibold text-white">
                                 Email Us at:
                              </span>
                              <br />
                              <a
                                 href="mailto:sales@nop-station.com"
                                 className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                              >
                                 info@zensoftlab.com
                              </a>
                           </p>
                           <p>
                              <span className="font-semibold text-white">
                                 Click Here to:
                              </span>
                              <br />
                              <a
                                 href="#"
                                 className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                              >
                                 Submit Your Query
                              </a>
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* RIGHT: Illustration */}
                  <div className="relative hidden lg:flex justify-center">
                     {/* Placeholder for illustration */}
                     <div className="relative w-full max-w-md">
                        <img src="service-web-development-01.svg" alt="" />

                        {/* Decorative accents */}
                        {/* <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl" />
                        <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" /> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
}
