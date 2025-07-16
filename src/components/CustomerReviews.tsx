
import { Star, Heart, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Эмма и Луна",
      rating: 5,
      text: `Мы заказали у Ирины корпоративные подарки к Новому году. Все были в восторге! Игрушки с характером, упаковка — на уровне, видно, что с любовью.
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBfvBKqJAPnxfXikCXJ96L0qkjKCDV5ydSg&s",
      location: "— Мария, HR-директор"
    },
    {
      id: 2,
      name: "Близнецы",
      rating: 5,
      text: "Для дня рождения дочки заказали торт у Ирины. Это был восторг! Красиво, вкусно, аккуратно. Ирина — настоящая мастерица своего дела.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GsDC6-tlHhYMRWLGWtbAB1xeJvycmgLEZQ&s",
      location: "— Елена и семья,"
    },
    {
      id: 3,
      name: "Ванечка",
      rating: 5,
      text: "Как взрослый коллекционер, я была поражена мастерством. Это не просто игрушки – это произведения искусства, которые приносят столько радости.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop",
      location: "Марина, коллекционер"
    },
    {
      id: 4,
      name: "Семья снеговиков",
      rating: 5,
      text: "Идеальный подарок для нашей племянницы! Упаковка была прекрасной, а куклы превзошли все ожидания. Обязательно закажем снова.",
      image: "data:image/jpeg;base64,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",
      location: "Денис"
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
              Истории наших друзей
            </h2>
            <Heart className="w-8 h-8 text-blush animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 font-rounded max-w-2xl mx-auto">
            Каждый компаньон находит свой идеальный дом. Вот некоторые из наших любимых историй 
            от семей, которые приняли наших ручных друзей.
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
          <p className="font-story text-3xl text-gray-800 mb-2">5.0 из 5</p>
          <p className="font-rounded text-gray-600">На основе 100+ счастливых клиентов</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
