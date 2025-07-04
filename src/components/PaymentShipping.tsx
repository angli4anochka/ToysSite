
import { Truck, Shield, CreditCard, Heart, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PaymentShipping = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-turquoise" />,
      title: "Secure Payments",
      description: "We accept all major credit cards, PayPal, and Apple Pay for your convenience."
    },
    {
      icon: <Truck className="w-8 h-8 text-blush" />,
      title: "Gentle Shipping",
      description: "Free shipping on orders over $75. Each item is carefully wrapped in tissue paper."
    },
    {
      icon: <Clock className="w-8 h-8 text-turquoise" />,
      title: "Crafting Time",
      description: "Ready-to-ship items leave within 2-3 days. Custom orders take 1-2 weeks with love."
    },
    {
      icon: <Globe className="w-8 h-8 text-blush" />,
      title: "Worldwide Love",
      description: "We ship internationally to spread handmade joy across the globe."
    },
    {
      icon: <Shield className="w-8 h-8 text-turquoise" />,
      title: "Happiness Promise",
      description: "30-day exchange policy. If you're not completely delighted, we'll make it right."
    },
    {
      icon: <Heart className="w-8 h-8 text-blush" />,
      title: "Care Instructions",
      description: "Each companion comes with gentle care instructions and a little story card."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-vanilla">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-story text-gray-800 mb-4">
            Simple & Secure
          </h2>
          <p className="text-lg text-gray-600 font-rounded max-w-2xl mx-auto">
            We've made ordering as gentle and straightforward as possible. 
            Your new companion is just a few clicks away.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-2xl animate-gentle-fade"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise/20 to-blush/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-rounded font-bold text-xl text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-rounded leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center">
          <h3 className="font-story text-2xl text-gray-800 mb-6">We Accept</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-rounded font-bold">
              VISA
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-rounded font-bold">
              MASTER
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-rounded font-bold">
              PayPal
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg font-rounded font-bold">
              Apple Pay
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-rounded font-bold">
              Google Pay
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 font-rounded">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Processing Time</h4>
              <p>Ready-to-ship: 1-2 business days<br />Made-to-order: 1-2 weeks</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Shipping Options</h4>
              <p>Standard (5-7 days) - Free over $75<br />Express (2-3 days) - $15</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">International</h4>
              <p>Worldwide shipping available<br />Duties may apply at destination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentShipping;
