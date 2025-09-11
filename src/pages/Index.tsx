import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Gallery from "@/components/Gallery";
import Exhibitions from "@/components/Exhibitions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <Gallery />
        <Exhibitions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
