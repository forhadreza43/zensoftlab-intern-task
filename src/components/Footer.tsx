import {
   Facebook,
   Twitter,
   Linkedin,
   Youtube,
   Instagram,
   Mail,
   ShieldCheck,
   ShieldEllipsis,
   FileBadge,
   Headset,
} from 'lucide-react';
import { FooterAccordion } from './FooterAccordion';
import { Link } from 'react-router';
import { AmericanExpressIcon, MastercardIcon, VisaIcon } from 'react-svg-credit-card-payment-icons';
import BottomFooter from './BottomFooter';
import PhoneNavigationMenu from './PhoneNavigationMenu';

const quickLinks = [
   {
      title: 'Information',
      links: [
         { label: 'Sitemap', href: '#' },
         { label: 'About Us', href: '#' },
         { label: 'Conditions of Use', href: '#' },
         { label: 'Privacy Policy', href: '#' },
         { label: 'Technology Partnerships', href: '#' },
         { label: 'Branding', href: '#' },
         { label: 'Contact Us', href: '#' },
         { label: 'Become a Partner', href: '#' },
      ],
   },
   {
      title: 'Customer Service',
      links: [
         { label: 'Search', href: '#' },
         { label: 'Blog', href: '#' },
         { label: 'Recently Viewed Products', href: '#' },
         { label: 'nopStation Flywheel', href: '#' },
         { label: 'Cloud Services', href: '#' },
         { label: 'Custom Solutions', href: '#' },
         { label: 'Our Services', href: '#' },
      ],
   },
   {
      title: 'My Account',
      links: [
         { label: 'My Account', href: '#' },
         { label: 'Orders', href: '#' },
         { label: 'Addresses', href: '#' },
         { label: 'Wishlist', href: '#' },
         { label: 'Copyright Removal Key', href: '#' },
         { label: 'nopCommerce Mobile Apps', href: '#' },
      ],
   },
];

const socialLinks = [
   {
      title: 'Follow Us',
      links: [
         { label: 'Facebook', icon: Facebook, href: '#' },
         { label: 'Twitter', icon: Twitter, href: '#' },
         { label: 'Linkedin', icon: Linkedin, href: '#' },
         { label: 'Youtube', icon: Youtube, href: '#' },
         { label: 'Instagram', icon: Instagram, href: '#' },
      ],
   },
];

const Footer = () => {
   return (
      <footer className="relative overflow-hidden border-t bg-primary mt-20">
         <div className="relative mx-auto">
            <div className="px-4">
               <div className="flex items-center gap-1 justify-center text-primary-foreground py-2 border-b lg:border-0">
                  <Mail size={16} />
                  <span>info@zensoftlab.com</span>
               </div>
            </div>
            <div className="bg-gray-600/40 ">
               <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
                  <div className="grid grid-cols-1 align-center mx-auto items-center md:grid-cols-2 gap-2 md:gap-4 lg:grid-cols-4 lg:gap-6 py-5">
                     <div className="flex items-center gap-3">
                        <ShieldEllipsis
                           size={44}
                           className="text-primary-foreground"
                        />
                        <div className="text-primary-foreground">
                           <p className="font-semibold">Secure Payments</p>
                           <p className="">
                              Via trusted payment channels/ Gateways.
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <FileBadge
                           size={44}
                           className="text-primary-foreground"
                        />
                        <div className="text-primary-foreground">
                           <p className="font-semibold">
                              High Quality Products
                           </p>
                           <p className="">
                              Professionals with 12+ years of work experience.
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <ShieldCheck
                           size={44}
                           className="text-primary-foreground"
                        />
                        <div className="text-primary-foreground">
                           <p className="font-semibold">100% Satisfaction</p>
                           <p className="">
                              Quality product with guaranteed satisfaction.
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <Headset
                           size={44}
                           className="text-primary-foreground"
                        />
                        <div className="text-primary-foreground">
                           <p className="font-semibold">
                              24/7 Customer service
                           </p>
                           <p className="">
                              Ready to help you at any time zone.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4 py-10">
               <div className="text-primary-foreground md:hidden">
                  {quickLinks.map((section, index) => (
                     <FooterAccordion key={index} data={section} />
                  ))}
                  {socialLinks.map((social, index) => (
                     <FooterAccordion key={index} data={social} />
                  ))}
               </div>
               <div className="hidden md:grid grid-cols-4 gap-5 ">
                  {quickLinks.map((section, index) => (
                     <div key={index}>
                        <h4 className="text-primary-foreground text-xl font-semibold uppercase mb-4">
                           {section.title}
                        </h4>
                        <ul>
                           {section.links.map((link, linkIndex) => (
                              <li key={linkIndex} className="mb-2">
                                 <Link
                                    to={link.href}
                                    className="text-primary-foreground"
                                 >
                                    {link.label}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
                  {socialLinks.map((social, index) => (
                     <div key={index}>
                        <h4 className="text-primary-foreground text-xl font-semibold uppercase mb-4">
                           {social.title}
                        </h4>
                        <ul className="flex flex-col gap-3">
                           {social.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                 <Link
                                    to={link.href}
                                    className="text-primary-foreground hover:underline flex items-center gap-1"
                                 >
                                    {link.icon && (
                                       <link.icon className="w-6 h-6 inline-block" />
                                    )}
                                    {link.label}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
            <div className='bg-gray-950/60 py-4'>
               <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4 ">
                  <div className="grid grid-cols-1 md:grid-cols-3 text-primary-foreground items-center text-center">
                     <div>
                        <p>
                           © 2026 ZenSoftLab. All rights
                           reserved.
                        </p>
                     </div>
                     <div>
                        <p className='text-sm'>
                           Powered by{' '}
                           <span className="font-semibold">ZenSoftCommerce</span>
                        </p>
                     </div>
                     <div className="flex items-center justify-center gap-2">
                        <span className='text-gray-400'>Pay With :</span>
                        <div className="flex items-center gap-2">
                           <VisaIcon width={30} height={25} />
                           <MastercardIcon width={30} height={25} />
                           <AmericanExpressIcon width={30} height={25} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <BottomFooter/>
            </div>
            <PhoneNavigationMenu />
         </div>
      </footer>
   );
};

export default Footer;
