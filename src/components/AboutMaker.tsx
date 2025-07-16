
import { Heart, Scissors, Palette } from "lucide-react";

const AboutMaker = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-vanilla to-soft-pink/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-story text-gray-800 mb-10">
              Меня зовут Ирина. Добро пожаловать в мой уютный мир!
              </h2>
              <div className="space-y-10 text-gray-700 font-rounded">
                <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">🧸</span> <strong className="text-xl">Куклы</strong><br />
                <span className="block mt-2">Мягкие, добрые, с тёплым сердцем. Я шью их из натуральных тканей, вручную. Каждая со своим характером — есть застенчивые,
                  есть мечтательницы, а одна даже играет на воображаемой скрипке.</span>
                </p>
                <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">❄️</span> <strong className="text-xl">Ватные игрушки</strong> <br />
                <span className="block mt-2">Немножко ностальгии, немножко волшебства. Эти пушистики словно сбежали с советских открыток и прячутся на ветках 
                  вашей ёлки — или в ладошке.</span>
                </p>
                <p className="text-lg leading-relaxed">
                <span className="text-2xl mr-2">🍓</span> <strong className="text-xl">Торты</strong> <br />
                <span className="block mt-2">Ванильные, шоколадные, ягодные — настоящие радости по заказу. Украшаю с фантазией, пеку с любовью, пробовать разрешается с улыбкой.</span>
                </p>
              </div>
            </div>

            {/* Crafting Process Icons */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blush/20 to-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-8 h-8 text-blush" />
                </div>
                <h4 className="font-rounded font-semibold text-gray-800 mb-1">Дизайн</h4>
                <p className="text-sm text-gray-600 font-rounded">Эскиз и планирование каждого друга</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise/20 to-vanilla/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scissors className="w-8 h-8 text-turquoise" />
                </div>
                <h4 className="font-rounded font-semibold text-gray-800 mb-1">Создание</h4>
                <p className="text-sm text-gray-600 font-rounded">Ручная работа из органических материалов</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-vanilla/30 to-blush/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-blush" />
                </div>
                <h4 className="font-rounded font-semibold text-gray-800 mb-1">Любовь</h4>
                <p className="text-sm text-gray-600 font-rounded">Наполнение каждого изделия заботой</p>
              </div>
            </div>
          </div>

          {/* Behind the Scenes Photo */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=700&fit=crop" 
                alt="Sarah crafting handmade toys in her studio"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-turquoise/30 to-blush/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-vanilla/40 to-soft-pink/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Quote Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-story text-lg text-gray-800 italic">
                "Кажое изделие сделано с большой любовью"
              </p>
              <p className="font-rounded text-sm text-gray-600 mt-1">- Ирина</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMaker;
