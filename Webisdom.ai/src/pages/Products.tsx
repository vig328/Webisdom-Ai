import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ChevronLeft, Sparkles, Github, Code2, Terminal, 
  ExternalLink, CheckCircle, Zap, Brain, Shield, Users, ArrowRight, ChevronDown 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import CaseStudies from "@/components/sections/CaseStudies";

// IMPORT DATA
import { products } from "@/data/productsData"; 

// ==========================================
// COMPONENT: ProductTour
// ==========================================
const ProductTour = () => {
  const steps = [
    {
      title: "Executive Dashboard",
      description: "Get a bird's eye view of all your AI operations. Monitor performance metrics, revenue growth, and system health in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
    },
    {
      title: "Smart Workflow Automation",
      description: "Automate repetitive tasks with drag-and-drop AI agents. Connect your CRM, Email, and ERP systems seamlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends with 95% accuracy. Use historical data to make informed decisions about inventory and staffing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      title: "Budget & Compliance Control",
      description: "Ensure contract compliance and gain full control over rates, limits, and budget definitions automatically.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-20">
      <div className="bg-black text-white p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Product Tour — Enterprise AI Suite</h2>
        <p className="text-gray-400 text-lg">
          Exceed client expectations with projects that are on time and on budget.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row h-[500px] lg:h-[600px]">
        <div className="w-full lg:w-2/3 bg-gray-100 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStep}
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full h-full object-cover object-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
            <Button variant="secondary" size="icon" className="pointer-events-auto rounded-full bg-white/80 hover:bg-white shadow-lg" onClick={prevStep}>
              <ChevronLeft className="h-6 w-6 text-black" />
            </Button>
            <Button variant="secondary" size="icon" className="pointer-events-auto rounded-full bg-white/80 hover:bg-white shadow-lg" onClick={nextStep}>
              <ChevronRight className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Step {currentStep + 1} / {steps.length}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {steps[currentStep].title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {steps[currentStep].description}
          </p>
          <div className="flex gap-2">
             {steps.map((_, idx) => (
               <div 
                 key={idx} 
                 onClick={() => setCurrentStep(idx)}
                 className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${idx === currentStep ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
               />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT: PRODUCTS
// ==========================================
const Products = () => {
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const displayedCategories = filter === "All" 
    ? [...new Set(products.map(p => p.category))] 
    : [filter];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        
        {/* Hero Section */}
        <section className="pt-40 pb-24 bg-slate-950 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 -z-10"></div>
          
          <div className="relative z-10 container mx-auto px-4 max-w-4xl">
            <Badge variant="outline" className="mb-6 border-white/20 text-blue-200 uppercase tracking-wider py-2 px-4 bg-white/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 inline-block" /> Enterprise AI Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              AI-Powered <span className="text-blue-500">Product Suite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              Exceed client expectations with projects that are on time and on budget.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {/* Primary Blue Button */}
              <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-900/20" onClick={() => setIsModalOpen(true)}>
                Book a Demo <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              
              {/* Updated "Take a Tour" Button - Matching your Image 2 */}
              <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-[#1a1c20] hover:bg-black text-white border border-white/10 transition-all duration-300" asChild>
                <a href="#product-tour">Take a Tour</a>
              </Button>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16" id="product-tour">
          <div className="container mx-auto px-4">
            
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto mb-16 p-1 bg-gray-200/50 rounded-full">
                <TabsTrigger value="products" className="rounded-full py-2.5">Our Products</TabsTrigger>
                <TabsTrigger value="case-studies" className="rounded-full py-2.5">Case Studies</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-16 focus-visible:outline-none">
                
                <ProductTour />

                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-gray-200 pb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Explore Solutions</h2>
                    <p className="text-gray-500 mt-1">Browse our complete catalog of {products.length} AI agents.</p>
                  </div>
                  
                  <div className="relative w-full md:w-64">
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 shadow-sm cursor-pointer"
                    >
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat === "All" ? "All Categories" : cat}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-24 min-h-[500px]">
                  {displayedCategories.map((category) => {
                    const categoryProducts = products.filter(p => p.category === category);
                    if (categoryProducts.length === 0) return null;

                    return (
                      <div key={category} className="space-y-8 animate-in fade-in duration-700">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-1 bg-primary rounded-full"></div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category}</h2>
                          <Badge variant="secondary" className="ml-2">{categoryProducts.length}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {categoryProducts.map((product) => (
                            <Card 
                              key={product.id}
                              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-gray-200/60 overflow-hidden bg-white h-full hover:-translate-y-2"
                            >
                              <Link to={`/products/${product.id}`} className="block h-full">
                                  <div className="relative h-56 overflow-hidden">
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                    <Badge className="absolute top-4 right-4 bg-white/90 text-black backdrop-blur-md border-0">
                                      {product.status}
                                    </Badge>
                                    <div className="absolute bottom-4 left-4 text-white">
                                      <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                                      <p className="text-sm text-gray-200 line-clamp-1">{product.subtitle}</p>
                                    </div>
                                  </div>

                                  <CardContent className="p-6">
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                                      {product.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                      {product.features.slice(0, 2).map((f, i) => (
                                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                          {f}
                                        </span>
                                      ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                      <span className="text-sm font-semibold text-primary flex items-center group-hover:translate-x-1 transition-transform">
                                        View Details <ChevronRight className="ml-1 w-4 h-4" />
                                      </span>
                                    </div>
                                  </CardContent>
                              </Link>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="case-studies">
                <CaseStudies />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to scale your enterprise?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Join industry leaders who are using our AI agents to reduce costs and drive innovation.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full h-14 px-10 text-lg" onClick={() => setIsModalOpen(true)}>
                Start Free Pilot
              </Button>
            </div>
          </div>
        </section>

      </main>
      <DemoRequestDialog open={isModalOpen} onOpenChange={setIsModalOpen} />
      <Footer />
    </div>
  );
};

export default Products;
