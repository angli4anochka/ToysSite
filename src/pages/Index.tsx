
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import AboutMaker from "@/components/AboutMaker";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream via-vanilla to-cream">
      <Header />
      <Hero />
      <ProductCatalog />
      <AboutMaker />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;
