import heroImage from "@/assets/hero-lifestyle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nhóm bạn trẻ mặc thời trang TuanStore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display"
            style={{ animationDelay: "0.1s" }}
          >
            Thời Trang Chuẩn Gu,
            <br />
            Phong Cách Chuẩn Bạn
          </h1>
          <p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
            style={{ animationDelay: "0.3s" }}
          >
            TuanStore – Nơi hội tụ những thiết kế trẻ trung, thoải mái và dẫn đầu xu hướng.
          </p>
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#categories" className="btn-hero">
              Buy now
            </a>
            <a href="#collections" className="btn-hero-outline">
              Xem bộ sưu tập
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
