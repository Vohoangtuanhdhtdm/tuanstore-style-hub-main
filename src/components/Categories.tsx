import { ArrowUpRight } from "lucide-react";
import categoryTshirt from "@/assets/category-tshirt.jpg";
import categoryShirt from "@/assets/category-shirt.jpg";
import categoryJeans from "@/assets/category-jeans.jpg";
import categoryKhaki from "@/assets/category-khaki.jpg";
import categoryHoodie from "@/assets/category-hoodie.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  { name: "Áo thun", image: categoryTshirt, count: "120+" },
  { name: "Áo sơ mi", image: categoryShirt, count: "85+" },
  { name: "Quần jeans", image: categoryJeans, count: "95+" },
  { name: "Quần kaki", image: categoryKhaki, count: "70+" },
  { name: "Hoodie & Jacket", image: categoryHoodie, count: "65+" },
  { name: "Phụ kiện", image: categoryAccessories, count: "150+" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Danh mục sản phẩm</span>
            <h2 className="section-title">
              Khám phá theo phong cách
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group"
          >
            Xem tất cả
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="card-category aspect-[4/5] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white font-display mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/70 text-sm">{category.count} sản phẩm</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
