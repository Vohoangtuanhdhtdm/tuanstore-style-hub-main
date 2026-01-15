import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-6">
            Ưu đãi đặc biệt
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
            Nâng Tầm Phong Cách
            <br />
            <span className="text-background/80">Mặc Là Chất</span>
          </h2>
          
          <p className="text-lg md:text-xl text-background/70 mb-12 max-w-xl mx-auto leading-relaxed">
            Khám phá ngay những sản phẩm bán chạy nhất tại TuanStore. 
            Giảm 15% cho khách hàng mới!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#categories" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-background text-foreground font-medium text-lg rounded-full transition-all duration-300 hover:bg-background/95 hover:scale-[1.02] active:scale-[0.98] shadow-lg group"
            >
              Mua ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#footer" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-background font-medium text-lg rounded-full border-2 border-background/30 transition-all duration-300 hover:border-background/60 hover:bg-background/5"
            >
              <MessageCircle className="w-5 h-5" />
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
