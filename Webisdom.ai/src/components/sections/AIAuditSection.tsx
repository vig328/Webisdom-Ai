import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart3, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";

const AIAuditSection = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We analyze your business processes, data infrastructure, and operational workflows to identify AI opportunities."
    },
    {
      icon: BarChart3,
      title: "Audit",
      description: "Comprehensive assessment of your current systems and detailed evaluation of AI implementation potential."
    },
    {
      icon: MapPin,
      title: "Roadmap",
      description: "Delivery of expert insights with a strategic roadmap for AI adoption tailored to your business goals."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            AI Audit <span className="text-gradient">as a Service</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our comprehensive AI assessment. We identify opportunities, analyze potential, and deliver actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="relative card-gradient hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive AI audit and discover how artificial intelligence can revolutionize your operations, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" onClick={() => setIsAuditDialogOpen(true)}>
                Request AI Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AuditRequestDialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen} />
    </section>
  );
};

export default AIAuditSection;