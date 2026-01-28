import { Card, CardContent } from "@/components/ui/card";
import { Building2, Heart, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const IndustriesSection = () => {
  const navigate = useNavigate();
  const industries = [
    {
      icon: Building2,
      name: "Hospitality",
      description:
        "AI-powered solutions for hotels, restaurants, and travel companies to enhance guest experiences and optimize operations.",
      features: [
        "Guest Experience Management",
        "Revenue Optimization",
        "Operational Intelligence",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description:
        "Intelligent healthcare solutions for patient care optimization, medical decision support, and predictive analytics.",
      features: [
        "Patient Care Intelligence",
        "Medical Decision Support",
        "Predictive Health Analytics",
      ],
    },
    {
      icon: TrendingUp,
      name: "Fintech",
      description:
        "Advanced financial intelligence for risk management, fraud detection, and customer insights in financial services.",
      features: ["Risk Assessment AI", "Fraud Detection", "Customer Analytics"],
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI solutions tailored for specific industry needs,
            delivering targeted results and sector-specific expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                className="card-gradient hover:shadow-strong transition-all duration-500 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {industry.description}
                  </p>

                  <div className="space-y-2">
                    {industry.features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full inline-block mr-2 mb-2"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/industries")}
            className="px-6 py-3 text-lg border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
