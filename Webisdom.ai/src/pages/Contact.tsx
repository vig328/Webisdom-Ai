import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle, Sparkles } from "lucide-react"; // Added Sparkles for the badge
import { Badge } from "@/components/ui/badge"; // Added Badge for consistency
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "demo",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      
      try {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0];

        // 1. Keep Database Entry
        const confirmationId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
        const { error: insertError } = await supabase
          .from('form_submissions')
          .insert([
            {
              submission_type: 'contact',
              confirmation_id: confirmationId,
              name: formData.name,
              email: formData.email,
              message: `Service: ${formData.service}\nMessage: ${formData.message}\nDate: ${dateStr} ${timeStr}`,
            }
          ]);

        if (insertError) {
          console.error('Database insert error:', insertError);
        }

        // 2. SMTP Email Sending
        try {
          const response = await fetch("https://email-backend-snowy-five.vercel.app/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              company: formData.company,
              message: formData.message,
              type: formData.service,
              phone: "Not provided in form"
            }),
          });

          const data = await response.json();

          if (data.success) {
            console.log("Email sent successfully via SMTP!");
          } else {
            console.error("Failed to send email via SMTP:", data);
            throw new Error("Failed to send email");
          }
        } catch (emailErr) {
          console.error('SMTP connection error:', emailErr);
          throw new Error("Server connection failed. Make sure server.js is running.");
        }

        // Success State
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "demo",
          message: ""
        });
        
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

      } catch (error: any) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error sending message",
          description: error?.message || "Please ensure your backend server is running on port 5000.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* UPDATED HERO SECTION: Matches Dark CXO Aesthetic */}
        <section className="pt-40 pb-24 bg-slate-950 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 -z-10"></div>
          
          <div className="relative z-10 container mx-auto px-4 max-w-4xl">
            <Badge variant="outline" className="mb-6 border-white/20 text-blue-200 uppercase tracking-wider py-2 px-4 bg-white/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 inline-block" /> Connect with us
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Get in <span className="text-blue-500">Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Section - Kept exactly the same */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {isSubmitted ? "Thank You!" : "Send us a Message"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will review your {formData.service === "demo" ? "demo request" : "audit request"} and get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            service: "demo",
                            message: ""
                          });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          What are you interested in? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="demo">Book a Demo</option>
                          <option value="audit">Request AI Audit</option>
                          <option value="hotel-ai">Hotel AI Chieftain</option>
                          <option value="consultation">General Consultation</option>
                          <option value="partnership">Partnership Opportunities</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your business needs and how we can help..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="card-gradient">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <p className="text-muted-foreground">contact@webisdom.ai</p>
                          <p className="text-muted-foreground">atharv.kumar@webisdom.ai</p>
                          <p className="text-muted-foreground">Atharv.kumar@webisdom.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Phone</h4>
                          <p className="text-muted-foreground">+91 9569394675</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Location</h4>
                          <p className="text-muted-foreground">First Floor, 8/78, Dentedge, Janpath, Connaught Place, New Delhi, Delhi, 110001</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <div className="space-y-4">
                      <a 
                        href="https://ai-chieftain.webisdomtech.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                      >
                        <span>Hotel AI Chieftain Platform</span>
                        <Send className="h-4 w-4" />
                      </a>
                      <div className="text-sm text-muted-foreground">
                        Explore our live hospitality AI solution
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-6">
                      Join leading companies that are already transforming their operations with our AI solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1" asChild>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai" target="_blank">
                          Email Us Directly
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
