import { Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-display">TUANSTORE</h3>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Thời trang trẻ trung, hiện đại dành cho giới trẻ Việt Nam. Chất lượng là cam kết.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-background/90">Thông tin</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-background/60 hover:text-accent transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-accent transition-colors">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-accent transition-colors">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-accent transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-5 text-background/90">Danh mục</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#categories" className="text-background/60 hover:text-accent transition-colors">
                  Áo thun
                </a>
              </li>
              <li>
                <a href="#categories" className="text-background/60 hover:text-accent transition-colors">
                  Áo sơ mi
                </a>
              </li>
              <li>
                <a href="#categories" className="text-background/60 hover:text-accent transition-colors">
                  Quần jeans
                </a>
              </li>
              <li>
                <a href="#categories" className="text-background/60 hover:text-accent transition-colors">
                  Hoodie & Jacket
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-background/90">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-background/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3 text-background/60">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-background/60">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>hello@tuanstore.vn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© 2025 TuanStore. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
