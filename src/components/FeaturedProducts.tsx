import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { Grip} from 'lucide-react';
import { HorizontalSlider } from '@/components/ui/horizontal-slider';
import ProductCard from './ProductCard';

const labelMap = {
   new: 'New Products',
   apps: 'Mobile Apps',
   themes: 'Themes Collection',
   plugins: 'Plugins Collection',
};

export default function FeaturedProducts() {
   return (
      <section className="bg-[#f5f7fb] py-16">
         <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            <Tabs defaultValue="new">
               <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <h2 className="text-lg font-semibold text-primary">
                     FEATURED ZENSOFTCOMMERCE PRODUCTS
                     <span className="inline-flex ml-2 opacity-30">
                        <Grip className="w-5 h-5" />
                     </span>
                  </h2>

                  <TabsList className="hidden md:flex bg-transparent gap-3">
                     {Object.entries(labelMap).map(([k, v]) => (
                        <TabsTrigger
                           key={k}
                           value={k}
                           className="font-bold text-gray-400 data-[state=active]:bg-secondary data-[state=active]:text-primary-foreground data-[state=active]:underline rounded-none"
                        >
                           {v}
                        </TabsTrigger>
                     ))}
                  </TabsList>

                  <div className="md:hidden">
                     <Select defaultValue="new">
                        <SelectTrigger className="bg-white border">
                           <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                           {Object.entries(labelMap).map(([k, v]) => (
                              <SelectItem key={k} value={k}>
                                 {v}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </div>
               </div>

               {Object.keys(labelMap).map((key) => (
                  <TabsContent key={key} value={key}>
                     <HorizontalSlider>
                        {Array.from({ length: 4 }).map((_, i) => (
                           <ProductCard key={i} />
                        ))}
                     </HorizontalSlider>
                  </TabsContent>
               ))}
            </Tabs>
         </div>
      </section>
   );
}




