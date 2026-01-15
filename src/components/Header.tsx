import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Trang chủ", href: "#" },
  { name: "Sản phẩm", href: "#categories" },
  { name: "Bộ sưu tập", href: "#collections" },
  { name: "Về chúng tôi", href: "#about" },
  { name: "Liên hệ", href: "#footer" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight font-display">
          <span className={isScrolled ? "text-foreground" : "text-white"}>TUANSTORE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? "text-foreground/70 hover:text-foreground" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#categories" 
            className={`inline-flex items-center justify-center px-6 py-2.5 font-medium rounded-full text-sm transition-all duration-300 ${
              isScrolled 
                ? "bg-primary text-primary-foreground" 
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            Mua ngay
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#categories"
              className="btn-primary text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mua ngay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
