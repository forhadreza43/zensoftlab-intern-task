import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
   {
      name: 'Zim-Zone',
      description: 'Multi-impact strategy for operational efficiency',
      category: 'nopCommerce',
   },
   {
      name: 'Shwapno E-Commerce',
      description: 'Digital excellence in retail',
      category: 'nopCommerce',
   },
   {
      name: 'Pro Athletics',
      description: 'Sports apparel company transformation',
      category: 'nopCommerce',
   },
   {
      name: 'PhaZZer',
      description: 'WooCommerce to nopCommerce migration',
      category: 'Migration',
   },
   {
      name: 'Vitacare',
      description: 'Hyperlocal eCommerce solution',
      category: 'nopCommerce',
   },
   {
      name: 'Always Food Safe',
      description: 'Food safety certification training',
      category: 'nopCommerce',
   },
];

const ProjectsSection = () => {
   return (
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 gradient-hero" />

         <div className="relative z-10 container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
               <h2 className="section-title">Our Projects</h2>
               <a
                  href="#"
                  className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
               >
                  View all
                  <ArrowRight className="w-4 h-4" />
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {projects.map((project, index) => (
                  <div
                     key={project.name}
                     className="group relative overflow-hidden rounded-xl bg-muted/30 aspect-video cursor-pointer"
                  >
                     {/* Placeholder gradient for project image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-navy-mid to-navy-dark" />

                     {/* Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                     {/* Content */}
                     <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs text-cyan font-medium mb-2">
                           {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                           {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           {project.description}
                        </p>
                     </div>

                     {/* Link icon */}
                     <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-5 h-5 text-primary-foreground" />
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-8 text-center md:hidden">
               <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
               >
                  View all projects
                  <ArrowRight className="w-4 h-4" />
               </a>
            </div>
         </div>
      </section>
   );
};

export default ProjectsSection;
