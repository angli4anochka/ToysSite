import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-warm-cream via-vanilla to-cream">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
          <ShoppingBag className="w-24 h-24 text-gray-300 mb-6" />
          <h2 className="text-3xl font-story text-gray-800 mb-4">Ваша корзина пуста</h2>
          <p className="text-gray-600 font-rounded mb-8">Давайте найдём для вас идеального компаньона!</p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-blush to-soft-pink hover:from-soft-pink hover:to-blush text-white px-8 py-4 rounded-full font-rounded text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Вернуться к покупкам
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream via-vanilla to-cream">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-story text-gray-800 mb-8">Корзина покупок</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-rounded font-semibold text-lg text-gray-800 mb-2">{item.name}</h3>
                    <p className="font-story text-xl text-turquoise mb-4">{item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-rounded font-medium px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-rounded font-bold text-xl text-gray-800 mb-6">Итого</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span className="font-rounded">Подытог</span>
                  <span className="font-rounded">₽{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-rounded">Доставка</span>
                  <span className="font-rounded">Бесплатно</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-rounded font-bold text-lg text-gray-800">Итого</span>
                  <span className="font-story text-2xl text-turquoise font-bold">₽{totalPrice}</span>
                </div>
              </div>

              <Button 
                onClick={() => navigate("/checkout")}
                className="w-full bg-gradient-to-r from-turquoise to-blush hover:from-blush hover:to-turquoise text-white rounded-full font-rounded font-semibold py-4 transition-all duration-300 transform hover:scale-105"
              >
                Оформить заказ
              </Button>

              <button
                onClick={clearCart}
                className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 font-rounded transition-colors"
              >
                Очистить корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;