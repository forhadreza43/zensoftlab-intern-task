import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
   const socialLinks = [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Linkedin, href: '#' },
      { icon: Youtube, href: '#' },
      { icon: Instagram, href: '#' },
   ];

   const quickLinks = [
      { name: 'All Products', href: '#' },
      { name: 'Services', href: '#' },
      { name: 'About Us', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Blog', href: '#' },
   ];

   const services = [
      { name: 'Customization Service', href: '#' },
      { name: 'Mobile App Development', href: '#' },
      { name: 'Theme Design', href: '#' },
      { name: 'Plugin Development', href: '#' },
      { name: 'ERP Solutions', href: '#' },
   ];

   return (
      <footer className="relative overflow-hidden border-t border-border">
         <div className="absolute inset-0 bg-background" />

         <div className="relative z-10 container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               {/* Logo & Description */}
               <div>
                  <a href="/" className="inline-block mb-4">
                     <span className="text-2xl font-bold">
                        <span className="text-cyan">n</span>
                        <span className="text-foreground">o</span>
                        <span className="text-primary">p</span>
                        <span className="text-foreground">Station</span>
                     </span>
                  </a>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                     Your trusted partner for nopCommerce development,
                     customization, and support services.
                  </p>
                  <div className="flex gap-3">
                     {socialLinks.map((social, index) => (
                        <a
                           key={index}
                           href={social.href}
                           className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                        >
                           <social.icon className="w-5 h-5" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="text-foreground font-semibold mb-4">
                     Quick Links
                  </h4>
                  <ul className="space-y-2">
                     {quickLinks.map((link) => (
                        <li key={link.name}>
                           <a
                              href={link.href}
                              className="text-muted-foreground text-sm hover:text-primary transition-colors"
                           >
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Services */}
               <div>
                  <h4 className="text-foreground font-semibold mb-4">
                     Services
                  </h4>
                  <ul className="space-y-2">
                     {services.map((link) => (
                        <li key={link.name}>
                           <a
                              href={link.href}
                              className="text-muted-foreground text-sm hover:text-primary transition-colors"
                           >
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Newsletter */}
               <div>
                  <h4 className="text-foreground font-semibold mb-4">
                     Stay Updated
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                     Subscribe to our newsletter for the latest updates.
                  </p>
                  <div className="flex">
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-muted border border-border rounded-l-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                     />
                     <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} nopStation. All rights reserved.
               </p>
               <div className="flex gap-4">
                  <a
                     href="#"
                     className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                     Privacy Policy
                  </a>
                  <a
                     href="#"
                     className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                     Terms of Service
                  </a>
                  <a
                     href="#"
                     className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                     Cookie Policy
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
