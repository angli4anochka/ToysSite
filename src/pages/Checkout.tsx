import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Truck, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const totalPrice = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен для заполнения";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обязателен для заполнения";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Адрес обязателен для заполнения";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "Город обязателен для заполнения";
    }
    
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Индекс обязателен для заполнения";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSuccessDialog(true);
    }
  };

  const handleReturnToShopping = () => {
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream via-vanilla to-cream">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 font-rounded transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться в корзину
        </button>

        <h1 className="text-3xl sm:text-4xl font-story text-gray-800 mb-8">Оформление заказа</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма оформления */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Контактная информация */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-rounded font-bold text-xl text-gray-800 mb-6">
                  Контактная информация
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-rounded">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Ваше имя"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 font-rounded">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-rounded">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 font-rounded">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-rounded">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="+7 (999) 999-99-99"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 font-rounded">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Адрес доставки */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-rounded font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Адрес доставки
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="font-rounded">Адрес</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.address ? 'border-red-500' : ''}`}
                      placeholder="Улица, дом, квартира"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1 font-rounded">{errors.address}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="font-rounded">Город</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="Город"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1 font-rounded">{errors.city}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="font-rounded">Индекс</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.postalCode ? 'border-red-500' : ''}`}
                        placeholder="123456"
                      />
                      {errors.postalCode && (
                        <p className="text-red-500 text-sm mt-1 font-rounded">{errors.postalCode}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Сводка заказа */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-rounded font-bold text-xl text-gray-800 mb-6">Ваш заказ</h2>
              
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="font-rounded text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-rounded text-gray-800">
                      ₽{parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-3">
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
                onClick={handleSubmit}
                className="w-full mt-6 bg-gradient-to-r from-turquoise to-blush hover:from-blush hover:to-turquoise text-white rounded-full font-rounded font-semibold py-4 transition-all duration-300 transform hover:scale-105"
              >
                Оформить заказ
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4 font-rounded">
                Нажимая "Оформить заказ", вы соглашаетесь с условиями обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-story text-center">
              Спасибо за оформление заказа!
            </DialogTitle>
            <DialogDescription className="text-center text-lg font-rounded mt-3">
              Скоро с вами свяжется наш менеджер
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleReturnToShopping}
              className="bg-gradient-to-r from-blush to-soft-pink hover:from-soft-pink hover:to-blush text-white px-8 py-4 rounded-full font-rounded text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Вернуться к покупкам
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;