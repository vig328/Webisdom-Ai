import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle, Sparkles, Github, Code2, Terminal } from "lucide-react";
import { Link } from "react-router-dom"; // <--- 1. Link Import Kiya
import { products } from "@/data/productsData";


const ProductShowcase = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const card = container.firstElementChild;
      if (!card) return;
      const cardWidth = card.offsetWidth + 16; 
      let newIndex = activeIndex + 1;
      if (newIndex > products.length - 1) newIndex = 0;
      setActiveIndex(newIndex);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }, 4000); // 4 seconds per scroll
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our suite of advanced AI Agents and Platforms driving digital transformation.
          </p>
        </div>

        <div className="relative w-[90%] mx-auto">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar scroll-smooth space-x-4 pb-4"
          >
            {products.map((product, idx) => (
              <Card
                key={idx}
                className="flex-shrink-0 w-[92%] sm:w-[45%] md:w-[32%] relative overflow-hidden card-gradient hover:shadow-strong transition-all duration-500 group border-t-4 border-t-transparent hover:border-t-primary"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    product.status.includes("Live") ? "bg-green-500/10 text-green-500" : 
                    product.status === "Open Source" ? "bg-blue-500/10 text-blue-500" :
                    "bg-primary/10 text-primary"
                  }`}>
                    {product.status === "Open Source" ? <Code2 className="h-3 w-3 mr-1"/> : <CheckCircle className="h-3 w-3 mr-1" />}
                    <span>{product.status}</span>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full relative z-0">
                  <div className="mb-4">
                    {/* Icon based on Type */}
                    <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        {product.url.includes("github") ? 
                            <Terminal className="h-6 w-6 text-primary" /> : 
                            <Sparkles className="h-6 w-6 text-primary" />
                        }
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                      {product.category}
                    </p>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.technologies && product.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] bg-secondary px-2 py-1 rounded border border-border/50 text-foreground/70">
                            {tech}
                        </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full group-hover:scale-105 transition-transform duration-300 mt-auto`}
                    asChild
                  >
                    {/* --- UPDATED LINK (CONNECTING TO PRODUCT DETAIL PAGE) --- */}
                    <Link to={`/products/${product.id}`}>
                        Explore Product <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 flex-wrap gap-y-2">
            {products.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/40"
                }`}
                onClick={() => {
                   setActiveIndex(idx);
                   if (scrollRef.current) {
                     const card = scrollRef.current.firstElementChild;
                     if (card) {
                        const cardWidth = card.offsetWidth + 16;
                        scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                     }
                   }
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;