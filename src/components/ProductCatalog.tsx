
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: "Luna the Sleepy Kitten",
      price: "$45",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=500&fit=crop",
      description: "Soft grey tabby kitten with sleepy eyes",
      available: true
    },
    {
      id: 2,
      name: "Woodland Friends Set",
      price: "$78",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=500&fit=crop",
      description: "Gentle deer and forest creature collection",
      available: true
    },
    {
      id: 3,
      name: "Cozy Cat Companion",
      price: "$52",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop",
      description: "Orange and white tabby with the softest fur",
      available: false
    },
    {
      id: 4,
      name: "Artisan Craft Kit",
      price: "$35",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop",
      description: "DIY materials for creating your own companion",
      available: true
    },
    {
      id: 5,
      name: "Dreamy Bear Duo",
      price: "$65",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=500&fit=crop",
      description: "Twin teddy bears perfect for snuggles",
      available: true
    },
    {
      id: 6,
      name: "Fairy Tale Fox",
      price: "$48",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=500&fit=crop",
      description: "Enchanting fox with a magical story",
      available: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-vanilla">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-story text-gray-800 mb-4">
            Our Gentle Collection
          </h2>
          <p className="text-lg text-gray-600 font-rounded max-w-2xl mx-auto">
            Each handcrafted companion is made with love and attention to detail. 
            Available for immediate shipping or made-to-order.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden animate-gentle-fade"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {!product.available && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full font-rounded text-sm font-medium">
                        Made to Order
                      </span>
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5 text-blush hover:fill-current transition-colors" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-rounded font-bold text-xl text-gray-800 group-hover:text-blush transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-story text-2xl text-turquoise font-bold">
                      {product.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-rounded text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-turquoise to-blush hover:from-blush hover:to-turquoise text-white rounded-full font-rounded transition-all duration-300 transform hover:scale-105"
                      disabled={!product.available}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.available ? 'Add to Cart' : 'Pre-Order'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="aspect-square p-0 w-10 h-10 rounded-full border-turquoise text-turquoise hover:bg-turquoise hover:text-white transition-all duration-300"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-blush text-blush hover:bg-blush hover:text-white px-8 py-4 rounded-full font-rounded text-lg transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
