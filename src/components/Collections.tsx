import { ArrowRight } from "lucide-react";
import collectionStreetwear from "@/assets/collection-streetwear.jpg";
import collectionBasic from "@/assets/collection-basic.jpg";
import collectionMinimal from "@/assets/collection-minimal.jpg";

const collections = [
  {
    name: "Streetwear",
    description: "Phong cách đường phố năng động và cá tính",
    image: collectionStreetwear,
    tag: "Xu hướng",
  },
  {
    name: "Basic Essentials",
    description: "Đơn giản, tinh tế, dễ phối đồ hằng ngày",
    image: collectionBasic,
    tag: "Bán chạy",
  },
  {
    name: "Minimal Chic",
    description: "Tối giản nhưng vẫn toát lên vẻ sang trọng",
    image: collectionMinimal,
    tag: "Mới",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Bộ sưu tập</span>
          <h2 className="section-title">
            Bộ Sưu Tập Được Yêu Thích
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <a
              key={collection.name}
              href="#"
              className="group block"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6 shadow-card group-hover:shadow-card-hover transition-all duration-500">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm text-foreground text-xs font-medium rounded-full shadow-soft">
                    {collection.tag}
                  </span>
                </div>
                
                {/* Hover Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center justify-center gap-2 py-3 bg-white/95 backdrop-blur-sm rounded-full text-foreground font-medium text-sm">
                    Khám phá ngay
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 font-display group-hover:text-accent transition-colors">
                {collection.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {collection.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
