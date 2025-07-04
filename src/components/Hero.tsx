
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blush/20 to-turquoise/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-turquoise/20 to-soft-pink/20 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-vanilla/30 to-blush/20 rounded-full blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-gentle-fade">
          <div className="inline-flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-blush mr-2 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-rounded font-bold bg-gradient-to-r from-blush via-turquoise to-blush bg-clip-text text-transparent">
              lovable.dev
            </h1>
            <Heart className="w-8 h-8 text-blush ml-2 animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-turquoise fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-12 animate-gentle-fade" style={{animationDelay: '0.3s'}}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-story text-gray-700 mb-4 leading-relaxed">
            "Soft stories in every hand"
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-rounded max-w-2xl mx-auto leading-relaxed">
            Handcrafted with love, each doll and soft toy carries a gentle story waiting to be shared. 
            Discover our collection of dreamy companions made from the softest materials.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-gentle-fade" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blush to-soft-pink hover:from-soft-pink hover:to-blush text-white px-8 py-4 rounded-full font-rounded text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Shop Our Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-4 rounded-full font-rounded text-lg transition-all duration-300"
          >
            Meet the Maker
          </Button>
        </div>

        {/* Product Preview Images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-gentle-fade" style={{animationDelay: '0.9s'}}>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop" 
              alt="Handmade soft toy kitten" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop" 
              alt="Handmade soft toy cat" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop" 
              alt="Handmade woodland toys" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop" 
              alt="Handmade craft materials" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
