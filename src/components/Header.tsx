import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-blush animate-pulse" />
            <span className="text-xl font-rounded font-bold text-gray-800">
              Игрушки ручной работы
            </span>
          </Link>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-blush text-white text-xs font-rounded font-bold rounded-full w-5 h-5 flex items-center justify-center animate-gentle-fade">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;