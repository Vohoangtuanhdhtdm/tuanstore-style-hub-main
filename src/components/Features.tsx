import { Shirt, Sparkles, Truck, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Thiết kế thời thượng",
    description: "Luôn cập nhật xu hướng mới nhất từ các sàn diễn thời trang quốc tế",
  },
  {
    icon: Sparkles,
    title: "Chất liệu cao cấp",
    description: "Mềm mại, thoáng mát và bền bỉ với thời gian",
  },
  {
    icon: Truck,
    title: "Giao hàng nhanh",
    description: "Toàn quốc trong 2-3 ngày, đóng gói cẩn thận và chỉn chu",
  },
  {
    icon: MessageCircle,
    title: "Hỗ trợ tận tâm",
    description: "Tư vấn mix đồ miễn phí, hỗ trợ 24/7 mọi lúc mọi nơi",
  },
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Giá trị của chúng tôi</span>
          <h2 className="section-title">
            Tại sao chọn TuanStore?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-feature text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon mx-auto mb-6">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
