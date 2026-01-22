import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/productsData"; 
import { 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, 
  Home, Factory, Truck, Gavel, Cpu, Wheat, TrendingUp, 
  Sparkles, ArrowRight, CheckCircle2, LayoutGrid
} from "lucide-react";

// --- CONFIGURATION (Updated Colors for Light Theme) ---
const industryConfig = {
  hospitality: { 
    title: "Hospitality", 
    tagline: "Redefining Guest Experiences",
    desc: "Automate concierge, optimize room inventory, and personalize guest stays with AI.",
    icon: Hotel, 
    color: "text-blue-600",
    bg: "bg-blue-100",
    stats: ["30% Less OpEx", "5-Star Ratings", "24/7 Service"]
  },
  fintech: { 
    title: "Fintech & Banking", 
    tagline: "Secure, Smart Financial Operations",
    desc: "Detect fraud in real-time, automate loan approvals, and ensure 100% compliance.",
    icon: Building2, 
    color: "text-purple-600",
    bg: "bg-purple-100",
    stats: ["99% Fraud Block", "Instant KYC", "Auto-Audit"]
  },
  healthcare: { 
    title: "Healthcare", 
    tagline: "AI-Powered Patient Care",
    desc: "Accelerate diagnosis, automate patient triage, and revolutionize drug discovery.",
    icon: Heart, 
    color: "text-rose-600",
    bg: "bg-rose-100",
    stats: ["99% Accuracy", "Faster Triage", "HIPAA Safe"]
  },
  tech: { 
    title: "Technology", 
    tagline: "Build the Future, Faster",
    desc: "Autonomous coding agents, secure cloud migration, and next-gen developer tools.",
    icon: Cpu, 
    color: "text-slate-700",
    bg: "bg-slate-200",
    stats: ["10x Coding Speed", "Zero Tech Debt", "Auto-Scale"]
  },
  manufacturing: { 
    title: "Manufacturing", 
    tagline: "Industry 4.0 Realized",
    desc: "Predict machine failures and detect defects with computer vision.",
    icon: Factory, 
    color: "text-orange-600",
    bg: "bg-orange-100",
    stats: ["Zero Downtime", "100% QC", "Safety First"]
  },
  retail: { 
    title: "Retail & E-commerce", 
    tagline: "Personalization at Scale",
    desc: "Optimize store layouts, generate ad creatives, and predict trends.",
    icon: ShoppingBag, 
    color: "text-pink-600",
    bg: "bg-pink-100",
    stats: ["Higher AOV", "Better Conversion", "Auto-Marketing"]
  },
  education: { title: "Education", tagline: "Personalized Learning", desc: "AI tutors and grading.", icon: GraduationCap, color: "text-yellow-600", bg: "bg-yellow-100", stats: ["24/7 Tutoring", "Fair Grading", "Student Success"] },
  agriculture: { title: "AgriTech", tagline: "Smart Farming", desc: "Precision irrigation.", icon: Wheat, color: "text-green-600", bg: "bg-green-100", stats: ["Higher Yield", "Less Water", "Crop Health"] },
  logistics: { title: "Logistics", tagline: "Efficient Supply Chains", desc: "Route optimization.", icon: Truck, color: "text-cyan-600", bg: "bg-cyan-100", stats: ["On-Time Delivery", "Fuel Saving", "Real-Time"] },
  legal: { title: "LegalTech", tagline: "Automated Workflows", desc: "Contract review.", icon: Gavel, color: "text-stone-600", bg: "bg-stone-200", stats: ["Risk Mitigation", "Fast Review", "Compliance"] },
  "real-estate": { title: "Real Estate", tagline: "Data-Driven PropTech", desc: "Valuation engines.", icon: Home, color: "text-teal-600", bg: "bg-teal-100", stats: ["Accurate Pricing", "Faster Sales", "Market Insight"] },
  revenue: { title: "Revenue Mgmt", tagline: "Maximize Profitability", desc: "Dynamic pricing.", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100", stats: ["Higher RevPAR", "Smart Pricing", "Competitor Intel"] },
  coworking: { title: "Coworking", tagline: "Automated Workspaces", desc: "Desk booking.", icon: Sparkles, color: "text-violet-600", bg: "bg-violet-100", stats: ["Better Occupancy", "Happy Members", "Auto-Billing"] },
};

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const config = industryConfig[id] || { 
    title: id?.charAt(0).toUpperCase() + id?.slice(1), 
    tagline: "Industry Solutions",
    desc: "Explore our specialized AI products.",
    icon: LayoutGrid, 
    color: "text-slate-700",
    bg: "bg-slate-100",
    stats: ["Efficiency", "Innovation", "Growth"]
  };
  
  const Icon = config.icon;
  const industryProducts = products.filter((p) => p.industry?.toLowerCase() === id?.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* ================= HERO SECTION (Light Theme & Visible Text) ================= */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        
        {/* Soft Color Blob Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-50 to-white -z-10"></div>
        <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${config.bg.replace('bg-', 'bg-')}`}></div>
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
           
           {/* Icon Badge */}
           <div className={`inline-flex p-4 rounded-2xl ${config.bg} mb-8 shadow-sm animate-in zoom-in duration-500`}>
              <Icon className={`w-12 h-12 ${config.color}`} />
           </div>
           
           {/* Main Heading (Dark Text) */}
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
             {config.title}
           </h1>
           
           {/* Subtitle (Grey Text) */}
           <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
             {config.tagline}
           </p>

           {/* Stats Pills (Bordered) */}
           <div className="flex flex-wrap justify-center gap-4">
              {config.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm text-sm font-semibold tracking-wide">
                   <CheckCircle2 className={`w-4 h-4 ${config.color}`} /> {stat}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="py-12 bg-white">
         <div className="container mx-auto px-4 text-center">
            <p className="text-2xl text-slate-800 max-w-4xl mx-auto font-light leading-relaxed border-l-4 border-slate-200 pl-6 italic">
              "{config.desc}"
            </p>
         </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-4">
             <h2 className="text-3xl font-bold text-slate-900">Tailored Solutions</h2>
             <Button variant="ghost" onClick={() => navigate('/industries')} className="hidden sm:flex text-slate-500 hover:text-slate-900">
                View All Industries <ArrowRight className="ml-2 w-4 h-4"/>
             </Button>
          </div>

          {industryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {industryProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-56 overflow-hidden relative bg-slate-50">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 shadow-sm backdrop-blur-md">
                      {product.status}
                    </Badge>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {product.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 flex-grow text-sm">
                      {product.description}
                    </p>

                    <Button 
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="w-full bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200 transition-all py-6"
                    >
                      Explore Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-400">No Solutions Listed</h3>
              <p className="text-slate-500 mt-2">Check back later for updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Need something else?</h2>
            <p className="text-slate-500 mb-8">Our AI Lab builds custom models for unique challenges.</p>
            <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/contact')}>
                Talk to Experts
            </Button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryDetail;