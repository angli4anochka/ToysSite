
import { Star, Heart, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Emma & Luna",
      rating: 5,
      text: "Luna the kitten has become my daughter's best friend. The quality is incredible and the softness is just perfect for bedtime cuddles.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 2,
      name: "Marcus & Family",
      rating: 5,
      text: "We ordered the woodland set for our twin boys. Sarah's attention to detail is amazing – each animal has its own personality!",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop",
      location: "Austin, TX"
    },
    {
      id: 3,
      name: "Grace",
      rating: 5,
      text: "As an adult collector, I was amazed by the craftsmanship. These aren't just toys – they're works of art that bring so much joy.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 4,
      name: "The Johnson Family",
      rating: 5,
      text: "Perfect gift for our niece! The packaging was beautiful and the doll exceeded all expectations. Will definitely order again.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop",
      location: "Denver, CO"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-soft-pink/30 to-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-blush animate-pulse" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-story text-gray-800">
              Stories from Our Friends
            </h2>
            <Heart className="w-8 h-8 text-blush animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 font-rounded max-w-2xl mx-auto">
            Every companion finds their perfect home. Here are some of our favorite stories 
            from families who've welcomed our handmade friends.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden animate-gentle-fade"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-turquoise/20 to-blush/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-turquoise" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-blush fill-current animate-pulse" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 font-rounded text-lg leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-turquoise/30">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-rounded font-semibold text-gray-800">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500 font-rounded">
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Display */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto">
          <div className="flex justify-center items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-blush fill-current" />
            ))}
          </div>
          <p className="font-story text-3xl text-gray-800 mb-2">5.0 out of 5</p>
          <p className="font-rounded text-gray-600">Based on 247+ happy customers</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
