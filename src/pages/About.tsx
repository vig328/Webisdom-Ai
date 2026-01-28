import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-gradient">Webisdom AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're pioneering the future of AI-driven business transformation, one industry at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section with Improved AI Image */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Transforming Industries with <span className="text-gradient">Intelligent AI</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    At Webisdom AI Solutions, we believe that artificial intelligence should be more than just a buzzword—it should be a powerful tool that creates real, measurable impact for businesses.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Founded with the vision of democratizing AI across key industries, we specialize in building domain-specific solutions that understand the unique challenges and opportunities within Hospitality, Fintech, and Healthcare sectors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our flagship product, Hotel AI Chieftain, is already transforming hospitality operations worldwide. As we expand into Fintech and Healthcare, we remain committed to delivering AI solutions that are not just technologically advanced, but practically valuable.
                  </p>
                </div>
                
                {/* AI Image Container */}
                <div className="order-1 lg:order-2 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-slate-900 h-[450px] md:h-[550px]">
                    <img 
                      src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop" 
                      alt="Neural AI Brain Concept"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    
                    {/* Quote Overlay */}
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
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Foundation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our innovation and drive our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
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
                Meet Our <span className="text-gradient">Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary/20">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-24 bg-gradient-to-br from-accent/10 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Industries We <span className="text-gradient">Transform</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Hospitality", "Fintech", "Healthcare"].map((industry, index) => (
                <Card key={industry} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{industry}</h3>
                    <p className="text-muted-foreground">
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