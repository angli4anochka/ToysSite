
import { Heart, Instagram, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS настройки - эти значения нужно будет заменить на реальные
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    setStatus('idle');

    const templateParams = {
      to_email: 'angli4anochka@gmail.com',
      subscriber_email: email,
      message: `Новая подписка на рассылку от: ${email}`,
    };

    try {
      // Для демонстрации - закомментировано
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Временное решение - показываем данные в консоли
      console.log('Новая подписка на рассылку!');
      console.log('Email подписчика:', email);
      console.log('Отправлено на: angli4anochka@gmail.com');
      
      setStatus('success');
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Ошибка подписки:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-vanilla to-warm-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Signup */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 text-center">
          <h3 className="font-story text-2xl text-gray-800 mb-3">
            Присоединяйтесь к нашему нежному сообществу
          </h3>
          <p className="text-gray-600 font-rounded mb-6 max-w-2xl mx-auto">
            Узнавайте первыми о новых компаньонах, историях из закулисья и специальных коллекциях. 
            Мы обещаем быть так же нежны, как наши игрушки.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:border-turquoise focus:outline-none font-rounded disabled:opacity-50"
              required
              disabled={isLoading}
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-turquoise to-blush hover:from-blush hover:to-turquoise text-white px-8 py-3 rounded-full font-rounded font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none min-w-[140px]"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              ) : status === 'success' ? (
                '✓ Спасибо!'
              ) : status === 'error' ? (
                'Ошибка!'
              ) : (
                'Подписаться'
              )}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="text-green-600 text-sm mt-4 font-rounded animate-gentle-fade">
              Вы успешно подписались на рассылку!
            </p>
          )}
          
          {status === 'error' && (
            <p className="text-red-600 text-sm mt-4 font-rounded animate-gentle-fade">
              Произошла ошибка. Попробуйте позже.
            </p>
          )}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
