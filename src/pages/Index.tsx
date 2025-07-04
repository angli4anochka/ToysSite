
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import AboutMaker from "@/components/AboutMaker";
import CustomerReviews from "@/components/CustomerReviews";
import PaymentShipping from "@/components/PaymentShipping";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream via-vanilla to-cream">
      <Hero />
      <ProductCatalog />
      <AboutMaker />
      <CustomerReviews />
      <PaymentShipping />
      <Footer />
    </div>
  );
};

export default Index;
