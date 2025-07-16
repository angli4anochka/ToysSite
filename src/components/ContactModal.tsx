import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS настройки - эти значения нужно будет заменить на реальные
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const templateParams = {
      to_email: 'angli4anochka@gmail.com',
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      // Для демонстрации - закомментировано
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Временное решение - показываем данные в консоли
      console.log('Отправка email на angli4anochka@gmail.com');
      console.log('От:', name, `(${email})`);
      console.log('Тема:', subject);
      console.log('Сообщение:', message);
      
      setStatus('success');
      setTimeout(() => {
        setSubject('');
        setMessage('');
        setEmail('');
        setName('');
        setStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div className={`
        relative bg-white rounded-3xl p-8 max-w-md w-full mx-4
        shadow-2xl animate-bubble-pop
        before:content-[''] before:absolute before:inset-0 
        before:rounded-3xl before:bg-gradient-to-br 
        before:from-turquoise/20 before:to-blush/20 
        before:blur-2xl before:-z-10
      `}>
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <h2 className="text-2xl font-story text-gray-800 mb-6">
          Написать автору
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-rounded text-gray-700 mb-2">
                Ваше имя
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-soft-pink/30 focus:border-turquoise/50 rounded-xl"
                placeholder="Имя"
                required
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-rounded text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-soft-pink/30 focus:border-turquoise/50 rounded-xl"
                placeholder="email@example.com"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-rounded text-gray-700 mb-2">
              Тема
            </label>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border-2 border-soft-pink/30 focus:border-turquoise/50 rounded-xl"
              placeholder="О чем вы хотите написать?"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-rounded text-gray-700 mb-2">
              Сообщение
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[150px] border-2 border-soft-pink/30 focus:border-turquoise/50 rounded-xl resize-none"
              placeholder="Ваше сообщение..."
              required
              disabled={isLoading}
            />
          </div>

          {status === 'success' && (
            <div className="bg-green-50 text-green-800 p-3 rounded-xl text-sm">
              Сообщение успешно отправлено!
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 text-red-800 p-3 rounded-xl text-sm">
              Произошла ошибка. Попробуйте позже.
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-turquoise to-blush text-white hover:opacity-90 rounded-full disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Отправить
                </>
              )}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-2 border-gray-300 hover:bg-gray-50 rounded-full"
              disabled={isLoading}
            >
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;