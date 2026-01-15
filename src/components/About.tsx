import { Users, Briefcase, Award, Heart } from "lucide-react";

const stats = [
  { value: "500+", label: "Sản phẩm" },
  { value: "10K+", label: "Khách hàng" },
  { value: "99%", label: "Hài lòng" },
];

const highlights = [
  {
    icon: Users,
    title: "Nam – Nữ – Unisex",
    description: "Đa dạng mẫu mã phù hợp mọi phong cách và giới tính",
  },
  {
    icon: Briefcase,
    title: "Đi học, đi làm, đi chơi",
    description: "Phù hợp mọi hoạt động trong cuộc sống hằng ngày",
  },
  {
    icon: Award,
    title: "Chất liệu tốt, giá hợp lý",
    description: "Cam kết chất lượng vượt trội với mức giá phải chăng",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <span className="section-label">Về chúng tôi</span>
            <h2 className="section-title mb-8">
              Chào mừng đến với
              <br />
              <span className="text-accent">TuanStore</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Với sứ mệnh mang đến cho bạn những sản phẩm thời trang chất lượng cao, 
              TuanStore tự hào là địa chỉ tin cậy cho phong cách sống năng động và hiện đại.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground font-display mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-5">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 font-display text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
