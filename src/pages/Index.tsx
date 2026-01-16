import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Collections from "@/components/Collections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <Categories />
      <Collections />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
