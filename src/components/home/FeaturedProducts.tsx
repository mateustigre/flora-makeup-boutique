import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Batom Matte Radiante",
    description: "Longa duração com acabamento aveludado",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80",
    category: "Batom"
  },
  {
    id: 2,
    name: "Base Líquida HD",
    description: "Cobertura natural e alta definição",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1631214540231-1e96c1c5f7d6?w=400&q=80",
    category: "Base"
  },
  {
    id: 3,
    name: "Paleta de Sombras Luxo",
    description: "12 cores altamente pigmentadas",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
    category: "Sombra"
  },
  {
    id: 4,
    name: "Iluminador Radiante",
    description: "Brilho natural para o dia todo",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80",
    category: "Iluminador"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Star className="w-3 h-3 mr-1" />
            Destaques
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os produtos mais amados pelas nossas clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {product.category}
                </Badge>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
                <p className="text-2xl font-bold text-primary mt-3">
                  R$ {product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="default">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
