import { useState, useEffect, useMemo } from 'react';
import {
   Menu,
   X,
   Search,
   User,
   ShoppingCart,
   BadgeInfo,
   ChevronRight,
   Palette,
   ArrowLeft,
   Vibrate,
   Blocks,
   Boxes,
   HandFist,
   HeartPlus,
   HousePlus,
   Building2,
   Spotlight,
   WindArrowDown,
} from 'lucide-react';
import NavDropdown from './NavDropdown';
import { Drawer, DrawerClose, DrawerContent } from '@/components/ui/drawer';
// import { Button } from '@/components/ui/button';

type MobileNavNode = {
   label: string;
   href?: string;
   icon?: React.ComponentType<{ className?: string }>;
   children?: MobileNavNode[];
};

type MobileNavLevel = {
   title: string;
   items: MobileNavNode[];
};

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [navStack, setNavStack] = useState<MobileNavLevel[]>([]);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navItems = [
      { name: 'All Products', hasDropdown: true },
      { name: 'Services', hasDropdown: true },
      { name: 'About Us', hasDropdown: false },
      { name: 'Global Presence', hasDropdown: false },
      { name: 'Contact Us', hasDropdown: false },
   ];

   const allProductsDropdown = useMemo(
      () => ({
         categories: [
            {
               title: 'Themes',
               icon: Palette,
               pageUrl: { name: 'view all themes', url: '/themes' },
               items: [
                  { name: 'Mega Store', url: '/themes/mega-store' },
                  { name: 'Kingdom', url: '/themes/kingdom' },
                  { name: 'Electro', url: '/themes/electro' },
                  { name: 'Fastor', url: '/themes/fastor' },
                  { name: 'Furniture', url: '/themes/furniture' },
                  { name: 'Clothing', url: '/themes/clothing' },
                  {
                     name: 'Jewelry & Accessories',
                     url: '/themes/jewelry-accessories',
                  },
                  { name: 'Electronics', url: '/themes/electronics' },
                  { name: 'Auto Parts', url: '/themes/auto-parts' },
                  { name: 'Grocery', url: '/themes/grocery' },
                  { name: 'Health & Beauty', url: '/themes/health-beauty' },
               ],
            },
            {
               title: 'Plugins',
               icon: Blocks,
               pageUrl: { name: 'view all plugins', url: '/plugins' },
               items: [
                  { name: 'AI & Automation', url: '/plugins/ai-automation' },
                  {
                     name: 'Sales & Analytics',
                     url: '/plugins/sales-analytics',
                  },
                  { name: 'Payments', url: '/plugins/payments' },
                  {
                     name: 'Shipping & delivery',
                     url: '/plugins/shipping-delivery',
                  },
                  {
                     name: 'SMS & Notifications',
                     url: '/plugins/sms-notifications',
                  },
                  { name: 'API Modules', url: '/plugins/api-modules' },
                  {
                     name: 'Chat Integration',
                     url: '/plugins/chat-integration',
                  },
                  {
                     name: 'Discounts & Promotions',
                     url: '/plugins/discounts-promotions',
                  },
               ],
            },
            {
               title: 'Mobile Apps',
               icon: Vibrate,
               pageUrl: { name: 'view all mobile apps', url: '/mobile-apps' },
               items: [
                  {
                     name: 'Flutter Mobile App with REST API',
                     url: '/mobile-apps/flutter-rest-api',
                  },
                  {
                     name: 'Flutter Admin Mobile App with REST API',
                     url: '/mobile-apps/flutter-admin-rest-api',
                  },
                  {
                     name: 'Flutter Mobile App for nopCommerce',
                     url: '/mobile-apps/flutter-nopcommerce',
                  },
                  {
                     name: 'Mobile App with REST API',
                     url: '/mobile-apps/rest-api',
                  },
                  {
                     name: 'Kingdom Theme + Flutter Mobile App Combo',
                     url: '/mobile-apps/kingdom-flutter-combo',
                  },
                  {
                     name: 'Delivery Management System Mobile App',
                     url: '/mobile-apps/delivery-management-system',
                  },
               ],
            },
         ],
         imageUrl:
            'https://images.unsplash.com/photo-1764813824123-dc750e0ce2e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         imageAlt: 'Mobile App Showcase',
         icon: BadgeInfo,
         url: '/all-products',
      }),
      []
   );

   const servicesDropdown = useMemo(
      () => ({
         categories: [
            {
               title: 'Development',
               icon: Boxes,
               items: [
                  { name: 'Web Development', url: '/services/web-development' },
                  {
                     name: 'Mobile App Development',
                     url: '/services/mobile-app-development',
                  },
                  { name: 'API Development', url: '/services/api-development' },
                  { name: 'Cloud Solutions', url: '/services/cloud-solutions' },
               ],
            },
            {
               title: 'Support',
               icon: HandFist,
               items: [
                  { name: '24/7 Support', url: '/services/24-7-support' },
                  { name: 'Maintenance', url: '/services/maintenance' },
                  { name: 'Updates', url: '/services/updates' },
                  { name: 'Bug Fixes', url: '/services/bug-fixes' },
               ],
            },
            {
               title: 'Consultation',
               icon: HeartPlus,
               items: [
                  { name: 'IT Consultation', url: '/services/it-consultation' },
                  {
                     name: 'Business Analysis',
                     url: '/services/business-analysis',
                  },
                  {
                     name: 'Project Management',
                     url: '/services/project-management',
                  },
                  {
                     name: 'Digital Transformation',
                     url: '/services/digital-transformation',
                  },
               ],
            },
            {
               title: 'Architecture',
               icon: HousePlus,
               items: [
                  {
                     name: 'Architecture Design',
                     url: '/services/architecture-design',
                  },
                  {
                     name: 'Performance Optimization',
                     url: '/services/performance-optimization',
                  },
                  {
                     name: 'Scalability Planning',
                     url: '/services/scalability-planning',
                  },
                  { name: 'Security Audits', url: '/services/security-audits' },
               ],
            },
         ],
         imageUrl:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
         imageAlt: 'Services Showcase',
         icon: BadgeInfo,
         url: '/services',
      }),
      []
   );

   const aboutUsDropdown = useMemo(
      () => ({
         categories: [
            {
               title: 'Company',
               icon: Building2,
               items: [
                  { name: 'About Us', url: '/about-us' },
                  { name: 'Careers', url: '/careers' },
                  { name: 'Press', url: '/press' },
                  { name: 'Blog', url: '/blog' },
               ],
            },
            {
               title: 'Leadership',
               icon: Spotlight,
               items: [
                  { name: 'Our Team', url: '/our-team' },
                  { name: 'Board of Directors', url: '/board-of-directors' },
                  { name: 'Advisors', url: '/advisors' },
               ],
            },
            {
               title: 'Resources',
               icon: WindArrowDown,
               items: [
                  { name: 'Help Center', url: '/help-center' },
                  { name: 'Contact Us', url: '/contact-us' },
                  { name: 'Privacy Policy', url: '/privacy-policy' },
                  { name: 'Terms of Service', url: '/terms-of-service' },
               ],
            },
         ],
         imageUrl:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop',
         imageAlt: 'About Us Showcase',
         icon: BadgeInfo,
         url: '/about-us',
      }),
      []
   );

   const mobileNavTree = useMemo<MobileNavNode[]>(
      () => [
         {
            label: 'All Products',
            href: allProductsDropdown?.url,
            children: allProductsDropdown.categories.map((category) => ({
               label: category.title,
               icon: category?.icon,
               href: category.pageUrl?.url,
               children: category.items.map((item) => ({
                  label: item.name,
                  href: item.url,
               })),
            })),
         },
         {
            label: 'Services',
            href: servicesDropdown?.url,
            children: servicesDropdown.categories.map((category) => ({
               label: category.title,
               icon: category?.icon,
               children: category.items.map((item) => ({
                  label: item.name,
                  href: item.url,
               })),
            })),
         },
         {
            label: 'About Us',
            href: aboutUsDropdown?.url,
            children: aboutUsDropdown.categories.map((category) => ({
               label: category.title,
               icon: category?.icon,
               children: category.items.map((item) => ({
                  label: item.name,
                  href: item.url,
               })),
            })),
         },
         { label: 'Global Presence', href: '/global-presence' },
         { label: 'Contact Us', href: '/contact-us' },
      ],
      [aboutUsDropdown, allProductsDropdown, servicesDropdown]
   );

   const handleNavigate = (href?: string) => {
      if (!href) return;
      window.location.assign(href);
      setIsMenuOpen(false);
   };

   const handleDrawerChange = (open: boolean) => {
      setIsMenuOpen(open);
      if (open) {
         // Prevent background scroll without shifting layout
         document.documentElement.classList.add('drawer-open');
         setNavStack([{ title: 'Menu', items: mobileNavTree }]);
      } else {
         document.documentElement.classList.remove('drawer-open');
         setNavStack([]);
      }
   };

   const openLevel = (node: MobileNavNode) => {
      if (!node.children || node.children.length === 0) return;
      setNavStack((prev) => [
         ...prev,
         { title: node.label, items: node.children as MobileNavNode[] },
      ]);
   };

   const goBack = () => {
      setNavStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
   };

   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md text-primary-foreground transition-all duration-100">
         <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            <div
               className={`flex items-center justify-between h-15 transition-all duration-100 ${
                  isScrolled ? 'lg:h-15' : 'lg:h-20'
               }`}
            >
               <div
                  className={`flex items-center ${
                     isScrolled ? 'lg:scale-95' : 'lg:scale-100'
                  } transition-transform duration-300`}
               >
                  {/* Mobile Menu Button */}
                  <button
                     className="lg:hidden pr-2 transform -translate-x-2 text-primary-foreground"
                     onClick={() => handleDrawerChange(!isMenuOpen)}
                  >
                     {isMenuOpen ? (
                        <X className="w-6 h-6" />
                     ) : (
                        <Menu className="w-6 h-6" />
                     )}
                  </button>
                  {/* Logo */}
                  <a href="/" className="flex items-center gap-2">
                     <span className="text-2xl font-bold">
                        <span className="text-cyan">Zen</span>
                        {/* <span className="text-primary-foreground">S</span> */}
                        <span className="text-secondary">Soft</span>
                        <span className="text-primary-foreground">Lab</span>
                     </span>
                  </a>
               </div>

               {/* Desktop Navigation */}
               <nav
                  className={`hidden lg:flex shrink-0 items-center transition-all duration-300 ${
                     isScrolled ? 'h-15' : 'lg:h-20'
                  }`}
               >
                  {navItems.map((item) => {
                     if (item.name === 'All Products') {
                        return (
                           <NavDropdown
                              key={item.name}
                              label={item.name}
                              categories={allProductsDropdown.categories}
                              imageUrl={allProductsDropdown.imageUrl}
                              imageAlt={allProductsDropdown.imageAlt}
                              url={allProductsDropdown?.url}
                           />
                        );
                     } else if (item.name === 'Services') {
                        return (
                           <NavDropdown
                              key={item.name}
                              label={item.name}
                              categories={servicesDropdown.categories}
                              imageUrl={servicesDropdown.imageUrl}
                              imageAlt={servicesDropdown.imageAlt}
                              url={servicesDropdown?.url}
                           />
                        );
                     } else if (item.name === 'About Us') {
                        return (
                           <NavDropdown
                              key={item.name}
                              label={item.name}
                              categories={aboutUsDropdown.categories}
                              imageUrl={aboutUsDropdown.imageUrl}
                              imageAlt={aboutUsDropdown.imageAlt}
                              url={aboutUsDropdown?.url}
                           />
                        );
                     } else {
                        return (
                           <a
                              key={item.name}
                              href="#"
                              className={`h-full flex items-center px-3 gap-1 text-sm font-medium text-primary-foreground hover:bg-secondary ${
                                 isScrolled ? 'lg:scale-95' : 'lg:scale-100'
                              } transition-all duration-300`}
                           >
                              {item.name}
                           </a>
                        );
                     }
                  })}
               </nav>

               {/* Right Actions */}
               <div
                  className={`flex items-center gap-4 ${
                     isScrolled ? 'lg:scale-95' : 'lg:scale-100'
                  } transition-transform duration-300`}
               >
                  <button className="flex items-center gap-2 text-sm text-primary-foreground transition-colors">
                     <Search size={24} />
                     <span className="hidden md:flex">Search</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-primary-foreground transition-colors">
                     <User size={24} />
                     <span className="hidden md:flex">Log In</span>
                  </button>
                  <button className="relative flex items-center text-primary-foreground transition-colors">
                     <ShoppingCart size={24} />
                     <span className="absolute font-medium text-md -top-1 -right-2 w-5 h-5 bg-secondary text-primary-foreground rounded-full flex items-center justify-center">
                        0
                     </span>
                  </button>
               </div>
            </div>

            {/* Mobile Navigation */}

            <Drawer
               direction="left"
               open={isMenuOpen}
               onOpenChange={handleDrawerChange}
            >
               <DrawerContent>
                  <div className="relative h-full bg-background rounded-4xl overflow-hidden">
                     {navStack.map((level, index) => {
                        const isRoot = index === 0;
                        const rightInset = index * 6; // stack visible on the right only

                        return (
                           <div
                              key={`${level.title}-${index}`}
                              className="absolute inset-y-0 left-0 border-r border-gray-300 rounded-r-4xl overflow-hidden bg-background shadow-2xl shadow-black/40"
                              style={{
                                 width: `calc(100% - ${rightInset}px)`,
                              }}
                           >
                              <ul>
                                 <li className="flex items-center justify-between border-b border-gray-300 px-4 py-2 w-full">
                                    <div className="flex items-center gap-2">
                                       {!isRoot && (
                                          <button
                                             onClick={goBack}
                                             className="rounded-md p-1 hover:bg-accent"
                                             aria-label="Back"
                                          >
                                             <ArrowLeft className="h-5 w-5" />
                                          </button>
                                       )}
                                       <span className="text-base font-semibold text-foreground">
                                          {level.title}
                                       </span>
                                    </div>
                                    <DrawerClose asChild>
                                       <button
                                          className="rounded-md"
                                          aria-label="Close menu"
                                       >
                                          <X className="h-5 w-5" />
                                       </button>
                                    </DrawerClose>
                                 </li>

                                 {level.items.map((item) => {
                                    const hasChildren = Boolean(
                                       item.children?.length
                                    );

                                    return (
                                       <li
                                          key={item.label}
                                          className="flex items-center justify-between px-4 py-3 border-b border-gray-200"
                                       >
                                          {' '}
                                          {item.icon && (
                                             <span className="bg-secondary p-2 rounded-md mr-3">
                                                <item.icon className="w-5 h-5 text-primary-foreground" />
                                             </span>
                                          )}
                                          <button
                                             className="text-left flex-1 uppercase text-primary"
                                             onClick={() =>
                                                handleNavigate(item.href)
                                             }
                                          >
                                             {item.label}
                                          </button>
                                          {hasChildren && (
                                             <button
                                                onClick={() => openLevel(item)}
                                                className="rounded-md"
                                                aria-label={`Open ${item.label}`}
                                             >
                                                <ChevronRight className="h-6 w-6" />
                                             </button>
                                          )}
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                        );
                     })}
                  </div>
               </DrawerContent>
            </Drawer>
         </div>
      </header>
   );
};

export default Header;
