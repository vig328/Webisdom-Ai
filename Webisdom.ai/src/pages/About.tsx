import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Building domain-specific AI solutions that deliver measurable impact across Hospitality, Fintech, and Healthcare industries."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the trusted AI partner for enterprises, transforming industries through intelligent, scalable, and future-ready solutions."
    },
    {
      icon: Users,
      title: "Values",
      description: "Innovation, integrity, and impact drive everything we do. We believe in creating AI that serves humanity and enhances business outcomes."
    }
  ];

  const teamMembers = [
    {
      name: "Amardeep Bajpai",
      role: "FOUNDER, IIM-A ALUMNUS",
      image: "/lovable-uploads/aa6bc937-0bd0-4524-a16f-7dc9e29851c4.png",
      description: "Mr. Amardeep Bajpai did his management education from the prestigious Indian Institute of Management, Ahmedabad."
    },
    {
      name: "Gourav Singh",
      role: "Sr. Vice President, BD & Client Servicing",
      image: "/lovable-uploads/2ca69ba8-ceb5-425d-92d5-52e9066faf81.png",
      description: "Accomplishes project objectives by planning and evaluating project activities."
    },
    {
      name: "Atharv Kumar",
      role: "AI LEAD, IIT MANDI ALUMNUS",
      image: "/lovable-uploads/506b0336-44ee-4e68-8cea-73e6a5f369ca.png",
      description: "As the AI Lead at Webisdom AI Solutions, driving innovation across Hospitality, Fintech, and Healthcare."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="pt-40 pb-24 bg-slate-950 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 -z-10"></div>
          <div className="relative z-10 container mx-auto px-4">
            <Badge variant="outline" className="mb-6 border-white/20 text-blue-200 uppercase tracking-wider">
              Our Identity
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              About <span className="text-blue-500">Webisdom AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Pioneering the future of AI-driven business transformation, one industry at a time.
            </p>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Transforming Industries with <span className="text-blue-600">Intelligent AI</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    At Webisdom AI Solutions, we believe that artificial intelligence should be more than just a buzzword—it should be a powerful tool that creates real, measurable impact for businesses.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Founded with the vision of democratizing AI across key industries, we specialize in building domain-specific solutions that understand the unique challenges and opportunities within Hospitality, Fintech, and Healthcare sectors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our flagship product, Hotel AI Chieftain, is already transforming hospitality operations worldwide. As we expand into Fintech and Healthcare, we remain committed to delivering AI solutions that are not just technologically advanced, but practically valuable.
                  </p>
                </div>
                
                <div className="order-1 lg:order-2 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-slate-900 h-[450px] md:h-[550px]">
                    <img 
                      src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop" 
                      alt="Neural AI Brain Concept"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <p className="text-white font-semibold text-xl md:text-2xl italic border-l-4 border-blue-500 pl-6 drop-shadow-xl">
                        "Building the future of AI-driven business solutions"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                Our <span className="text-blue-600">Foundation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our innovation and drive our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="bg-white hover:shadow-xl transition-all duration-300 text-center border-none shadow-sm">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Meet Our <span className="text-blue-600">Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-white hover:shadow-lg transition-all duration-300 text-center border-slate-100">
                  <CardContent className="p-8">
                    <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-50">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4 text-sm tracking-wide uppercase">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Transform - RE-ADDED SECTION */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Industries We <span className="text-blue-500">Transform</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {["Hospitality", "Fintech", "Healthcare"].map((industry, index) => (
                <Card key={industry} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{industry}</h3>
                    <p className="text-gray-400">
                      {industry === "Hospitality" && "Revolutionizing guest experiences and operational efficiency with our Hotel AI Chieftain platform."}
                      {industry === "Fintech" && "Next-generation financial intelligence for risk management and customer insights. Coming soon."}
                      {industry === "Healthcare" && "Intelligent healthcare solutions for patient care optimization. Coming soon."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
