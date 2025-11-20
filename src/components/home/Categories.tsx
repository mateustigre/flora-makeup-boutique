import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Batom",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80",
    count: 24
  },
  {
    id: 2,
    name: "Base",
    image: "https://images.unsplash.com/photo-1631214540231-1e96c1c5f7d6?w=400&q=80",
    count: 18
  },
  {
    id: 3,
    name: "Sombra",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
    count: 32
  },
  {
    id: 4,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    count: 15
  },
  {
    id: 5,
    name: "Blush",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80",
    count: 12
  },
  {
    id: 6,
    name: "Rímel",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&q=80",
    count: 16
  }
];

export const Categories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/50 text-accent-foreground">
            <Sparkles className="w-3 h-3 mr-1" />
            Explore
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossas Categorias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você precisa para realçar sua beleza
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {category.count} produtos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);
