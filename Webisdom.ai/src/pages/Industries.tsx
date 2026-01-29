import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, 
  Home, Factory, Truck, Gavel, Cpu, Wheat, TrendingUp, Sparkles, ArrowRight
} from "lucide-react";

const industryConfig = [
  { id: "hospitality", title: "Hospitality", icon: Hotel, color: "text-blue-600", bg: "bg-blue-50", desc: "AI for Hotels, Resorts, Restaurants & Travel." },
  { id: "fintech", title: "Fintech", icon: Building2, color: "text-purple-600", bg: "bg-purple-50", desc: "Banking automation, Fraud detection & Compliance." },
  { id: "healthcare", title: "Healthcare", icon: Heart, color: "text-red-600", bg: "bg-red-50", desc: "Diagnostics, Patient Triage & Pharma R&D." },
  { id: "tech", title: "Technology", icon: Cpu, color: "text-slate-700", bg: "bg-slate-50", desc: "Dev Tools, Cybersecurity & Autonomous Agents." },
  { id: "manufacturing", title: "Manufacturing", icon: Factory, color: "text-orange-600", bg: "bg-orange-50", desc: "IoT, Predictive Maintenance & Safety." },
  { id: "retail", title: "Retail", icon: ShoppingBag, color: "text-pink-600", bg: "bg-pink-50", desc: "E-commerce optimization & Marketing AI." },
  { id: "education", title: "Education", icon: GraduationCap, color: "text-yellow-600", bg: "bg-yellow-50", desc: "EdTech, Personalized Tutoring & Grading." },
  { id: "agtech", title: "AgriTech", icon: Wheat, color: "text-green-600", bg: "bg-green-50", desc: "Smart Farming, Drones & Yield Prediction." },
  { id: "logistics", title: "Logistics", icon: Truck, color: "text-cyan-600", bg: "bg-cyan-50", desc: "Supply Chain, Fleet Management & Routing." },
  { id: "real-estate", title: "Real Estate", icon: Home, color: "text-teal-600", bg: "bg-teal-50", desc: "Valuation, PropTech & Market Analysis." },
  { id: "revenue", title: "Revenue Mgmt", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", desc: "Dynamic Pricing & Competitor Intelligence." },
  { id: "legal", title: "LegalTech", icon: Gavel, color: "text-stone-600", bg: "bg-stone-50", desc: "Contract Analysis, Patents & Compliance." },
  { id: "coworking", title: "Coworking", icon: Sparkles, color: "text-violet-600", bg: "bg-violet-50", desc: "Workspace Automation & Community Mgmt." },
];

const Industries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id) => {
    // Navigating to the clean URL structure
    navigate(`/industry/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-40 pb-20 bg-slate-950 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 -z-10"></div>
         <div className="relative z-10 container mx-auto px-4">
            <Badge variant="outline" className="mb-6 border-white/20 text-blue-200">Sectors We Transform</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Industries</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Select an industry to explore tailored AI solutions.</p>
         </div>
      </section>

      <main className="py-24 container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryConfig.map((ind) => {
            const Icon = ind.icon;
            return (
              <Card 
                key={ind.id} 
                onClick={() => handleCardClick(ind.id)}
                className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-gray-100 bg-white overflow-hidden relative"
              >
                {/* Visual enhancements */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="flex flex-row items-center gap-4 pb-2 relative z-10">
                  <div className={`p-3.5 rounded-2xl ${ind.bg} transition-colors group-hover:bg-slate-900`}>
                    <Icon className={`w-8 h-8 ${ind.color} group-hover:text-white transition-colors`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">{ind.desc}</p>
                  <div className="flex items-center text-sm font-bold text-slate-900 opacity-60 group-hover:opacity-100 group-hover:text-blue-600 transition-all">
                    View Solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
