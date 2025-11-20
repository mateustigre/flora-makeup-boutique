import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-primary-foreground animate-fade-in">
          Flora Makeup
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
          Realce sua beleza natural com produtos de alta qualidade
        </p>
        <Button variant="hero" size="lg" className="animate-scale-in">
          <ShoppingBag className="mr-2" />
          Ver Produtos
        </Button>
      </div>
    </section>
  );
};
