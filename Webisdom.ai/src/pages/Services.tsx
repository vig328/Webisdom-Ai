import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  BarChart3,
  MapPin,
  CheckCircle,
  Brain,
  Eye,
  TrendingUp,
  Shield,
  Cpu,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Services = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const navigate = useNavigate();
  // src/data/blogs.js
  const blogs = [
    {
      id: 1,
      category: "AI Strategy",
      categoryColor: "bg-primary/10 text-primary",
      title: "How AI is Transforming Global Enterprise Workflows",
      description:
        "The New Backbone of Business Artificial Intelligence (AI) is rapidly evolving from a futuristic concept into the absolute backbone of global enterprises. In today's hyper-connected and data-driven marketplace, AI is no longer just an optional competitive advantage; it has become a fundamental infrastructure requirement. Companies that fail to integrate these systems risk falling behind, while those that embrace them are setting new standards for efficiency. Beyond Basic Automation: A Fundamental Redesign Traditionally, automation was limited to handling simple, repetitive tasks—like data entry or basic calculations. However, what we are witnessing today is far more profound. AI is not just automating tasks; it is fundamentally redesigning how modern teams work. It acts as an intelligent layer that sits on top of existing workflows, allowing human employees to shift their focus from mundane execution to high-level strategy and creative problem-solving. Key Pillars of AI Integration Modern organizations now rely on AI to drive four critical areas of business: Predictive Analytics: Instead of reacting to historical data, companies use AI to forecast future trends, demand spikes, and potential risks with incredible accuracy. Intelligent Decision-Making: AI removes the guesswork from management. Leaders can now make decisions based on real-time data insights rather than intuition alone. Workflow Orchestration: Complex processes that involve multiple departments are now streamlined by AI agents that ensure smooth handovers and communication. Resource Optimization: AI ensures that time, money, and manpower are allocated exactly where they are needed most, reducing waste significantly. Real-World Impact Across Departments The impact of this transformation is visible across every vertical of an enterprise: Supply Chain: Through advanced forecasting, AI predicts disruptions before they occur, allowing businesses to adjust inventory and logistics proactively. Finance: Automated financial reporting has moved beyond simple spreadsheets, offering real-time compliance checks and error-free auditing. Human Resources (HR): In HR, AI-driven screening tools help recruiters identify the best talent faster by analyzing skills and culture fit without human bias. Customer Experience: Real-time customer insights allow businesses to offer hyper-personalized experiences that were previously impossible to scale.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },

    {
      id: 2,
      category: "NLP",
      categoryColor: "bg-accent/10 text-accent",
      title: "Revolution of NLP-Powered Automation",
      description:
        "Natural Language Processing (NLP) is evolving into one of the most influential technologies in enterprise automation. Gone are the days when chatbots only understood specific keywords or rigid commands. Today’s NLP systems can comprehend context, tone, sentiment, and even domain-specific jargon. This brings a level of human-like intelligence to digital interactions that was previously unimaginable, allowing machines to 'read between the lines' and understand not just what a user says, but what they actually mean. Bridging the Gap Between Humans and Machines Businesses are leveraging NLP to transform how they handle data and communication. It is no longer just about processing text; it is about understanding intent to drive action. Key applications include: Automated Customer Support: Intelligent agents can now handle complex queries with empathy, resolving issues 24/7 without human intervention, and routing only the most critical cases to humans. Knowledge Extraction: Advanced NLP engines scan thousands of unstructured documents—contracts, invoices, and reports—to extract critical data points in seconds, saving thousands of manual hours. Global Collaboration: Real-time neural translation tools break down language barriers, allowing international teams to collaborate seamlessly on internal communications and documents. The Technologies Driving the Change This blog highlights the breakthroughs shaping modern NLP, particularly the rise of Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). While LLMs provide the creative reasoning and conversational fluency, RAG ensures that the AI's answers are grounded in your company's specific data. This combination eliminates errors (often called 'hallucinations') and ensures that every automated response is accurate, compliant, and reliable. Why This Matters for Enterprises The impact is transformative: faster workflows, significantly reduced operational load, and vastly improved customer experiences. By adopting these Contextual Chat Agents, organizations can scale their automation efforts without losing the personal touch that customers value. The future of automation speaks your language—literally.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },

    {
      id: 3,
      category: "Computer Vision",
      categoryColor: "bg-blue-100 text-blue-600",
      title: "Computer Vision is Changing Automation Forever",
      description:
        "Computer Vision is enabling machines to interpret the world visually with unprecedented accuracy, and industries are transforming because of it. Unlike standard cameras that simply record footage, Computer Vision systems 'understand' what they see. By mimicking the complexity of the human visual system and augmenting it with machine speed, these systems can analyze vast amounts of visual data in milliseconds, identifying patterns and anomalies that the human eye might miss.Transforming Key Industries The application of this technology is reshaping the global economy across several verticals: Manufacturing & Industry 4.0: Factories are deploying AI-driven quality inspection systems that detect microscopic defects instantly. This ensures zero-defect production lines and reduces waste significantly. Retail Evolution: Retailers are moving beyond simple surveillance. They now use vision analytics for customer behavior tracking (heatmaps) and frictionless, automated checkouts, eliminating long queues and enhancing the shopping experience. Healthcare: Medical institutions rely on AI for 'second opinions.'' Algorithms analyze X-rays, MRIs, and CT scans to detect early signs of diseases like tumors or fractures, leading to faster diagnosis and improved patient care. Powering Smart Cities and Mobility Computer Vision is the 'eyes' behind the autonomous revolution. It powers self-driving vehicles, allowing them to navigate complex traffic, recognize pedestrians, and read road signs in real-time. Beyond cars, it enables smart city surveillance for traffic management, drone monitoring for agriculture and safety, and immersive AR/VR experiences that blend digital information with the physical world. The Technological Edge: Real-Time and On-Device This blog dives into the latest advancements driving this shift—specifically Real-Time Object Detection and Edge Vision Models. By processing visual data locally on the device (Edge AI) rather than sending it to the cloud, businesses can achieve near-zero latency. Combined with spatial analytics, Computer Vision is not just watching the world; it is actively helping to build a safer, smarter, and more efficient future.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },

    {
      id: 4,
      category: "Generative AI",
      categoryColor: "bg-purple-100 text-purple-600",
      title: "From Chatbots to Creation: The Evolution of Generative AI",
      description:
        "Generative AI has moved far beyond simple chatbots and is now acting as a powerful engine for enterprise creativity and innovation. While traditional AI analyzes existing data, Generative AI creates new data—whether it's writing code, designing marketing visuals, or drafting legal contracts. This capability is fundamentally changing the 'Creator Economy' within businesses. From Concept to Reality Faster: Product teams are using GenAI to rapid-prototype designs, reducing the time-to-market from months to weeks. Marketing departments leverage these models to generate hyper-personalized content at scale, ensuring that every customer interaction feels unique. Coding and Development: In the software world, AI-powered coding assistants are writing boilerplate code, debugging errors, and documenting systems, allowing developers to focus on complex architecture rather than syntax. The Future of Human-AI Collaboration: This blog explores how Generative AI is not replacing human creativity but amplifying it. By handling the heavy lifting of drafting and iterating, GenAI frees up human professionals to focus on strategy, emotional connection, and final quality assurance, marking a new era of hybrid workforce productivity.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    },

    {
      id: 5,
      category: "Predictive Analytics",
      categoryColor: "bg-green-100 text-green-600",
      title: "From Hindsight to Foresight: The Power of Predictive Analytics",
      description:
        "In the past, businesses relied on 'Descriptive Analytics' to understand what happened yesterday. Today, 'Predictive Analytics' tells them what will happen tomorrow. By utilizing historical data, statistical algorithms, and machine learning techniques, organizations can now predict future outcomes with remarkable precision. Shifting from Reactive to Proactive: The true power of predictive analytics lies in its ability to turn an organization from reactive to proactive. Instead of fixing a machine after it breaks, predictive maintenance models alert engineers days in advance about potential failures, saving millions in downtime. Customer Retention and Growth: In the sales sector, predictive models analyze customer behavior patterns to identify 'churn risks'—customers who are likely to leave—allowing teams to intervene with targeted offers before it's too late. Financial Forecasting: CFOs are using these tools to simulate various market scenarios, helping them optimize cash flow and investment strategies amidst economic uncertainty. This blog dives deep into how data is no longer just a record of the past, but a map to the future.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },

    {
      id: 6,
      category: "AI Ethics & Security",
      categoryColor: "bg-red-100 text-red-600",
      title: "The Trust Factor: Navigating AI Ethics and Data Privacy",
      description:
        "As AI becomes deeply integrated into business operations, the question changes from 'Can we build it?' to 'Should we build it, and is it safe?' The rise of powerful AI systems has brought critical challenges regarding data privacy, algorithmic bias, and security. Building Responsible AI: For global enterprises, adopting AI is not just about performance; it is about compliance and trust. 'Explainable AI' (XAI) is becoming a standard requirement, ensuring that AI decisions—such as loan approvals or hiring recommendations—are transparent and understandable, rather than coming from a 'black box.' Data Sovereignty and Security: With cyber threats becoming more sophisticated, AI-driven security systems are the new defense line, detecting anomalies and breaches faster than any human analyst. However, businesses must also ensure that their internal data used to train models remains secure and does not leak into public domains. This blog discusses the framework for Ethical AI governance and how companies can innovate without compromising on security or values.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    },
  ];

  const auditProcess = [
    {
      icon: Search,
      title: "Performance Benchmarking",
      description:
        "Comprehensive evaluation of your AI systems against industry standards, identifying optimization opportunities and performance gaps.",
      duration: "1-2 weeks",
    },
    {
      icon: Shield,
      title: "Bias Detection & Ethical Compliance",
      description:
        "Advanced analysis to detect algorithmic bias, ensure fairness, and maintain ethical AI standards across all systems.",
      duration: "2-3 weeks",
    },
    {
      icon: MapPin,
      title: "Improvement Roadmap",
      description:
        "Strategic plan with actionable insights, technical recommendations, and clear implementation pathways for AI optimization.",
      duration: "1 week",
    },
  ];

  const auditBenefits = [
    "Performance benchmarking against industry leaders",
    "Advanced bias detection and fairness analysis",
    "Ethical AI compliance validation and certification",
    "Detailed improvement roadmaps with clear milestones",
    "ROI projections and cost-benefit optimization",
    "Risk mitigation strategies for AI deployment",
  ];

  const aiLabServices = [
    {
      icon: Brain,
      title: "Custom AI Models",
      description:
        "Tailored machine learning models designed specifically for your business needs, from concept to deployment.",
    },
    {
      icon: Cpu,
      title: "NLP Systems",
      description:
        "Advanced natural language processing solutions for intelligent automation, sentiment analysis, and conversational AI.",
    },
    {
      icon: Eye,
      title: "Computer Vision Tools",
      description:
        "Cutting-edge image and video analysis systems for automated quality control, object detection, and visual intelligence.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Data-driven forecasting models that transform historical data into actionable future insights and strategic advantages.",
    },
  ];

  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [section]);
  const handleNavigation = (id, industry: any) => {
    navigate(`/industries/${id}`, { state: { industry } });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16" id="ai-solutions">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Enterprise <span className="text-gradient">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From intelligent auditing to custom AI development—empowering
                businesses with cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* AI Audit Service */}
        <section className="py-24" id="ai-audit">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="card-gradient hover:shadow-strong transition-all duration-500">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-3xl">
                      AI Audit as a Service
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground mt-4 text-lg">
                    Evaluate and optimize your AI systems through advanced
                    performance benchmarking, bias detection, ethical compliance
                    validation, and strategic improvement roadmaps.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">What You Get:</h4>
                      <ul className="space-y-3">
                        {auditBenefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">
                        Process Timeline:
                      </h4>
                      <div className="space-y-4">
                        {auditProcess.map((step, index) => (
                          <div
                            key={step.title}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h5 className="font-medium">{step.title}</h5>
                              <p className="text-sm text-accent">
                                {step.duration}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <Button
                      size="lg"
                      onClick={() => setIsAuditDialogOpen(true)}
                    >
                      Request AI Audit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Audit Process */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Enterprise-Grade{" "}
                <span className="text-gradient">AI Auditing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic 4-6 week evaluation process delivering actionable
                insights for AI excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auditProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={step.title}
                    className="card-gradient hover:shadow-medium transition-all duration-300 text-center"
                  >
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-accent font-medium mb-4">
                        {step.duration}
                      </p>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => setIsAuditDialogOpen(true)}>
                Start Your AI Audit
              </Button>
            </div>
          </div>
        </section>

        {/* AI Lab Solutions */}
        <section className="py-24" id="ai-lab-solutions">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="h-10 w-10 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold">
                  AI Lab <span className="text-gradient">Solutions</span>
                </h2>
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Where innovation meets intelligence. Our AI Lab designs and
                develops custom AI models, NLP systems, computer vision tools,
                and predictive analytics solutions that scale with your
                ambitions.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We collaborate closely with your team to transform complex
                challenges into intelligent, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {aiLabServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="card-gradient hover:shadow-strong transition-all duration-500 group"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="card-gradient hover:shadow-strong transition-all duration-500 border-primary/20">
              <CardContent className="p-12 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Transform Your Business with{" "}
                  <span className="text-gradient">
                    Intelligent AI Solutions
                  </span>
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Ready to unlock the full potential of artificial intelligence?
                  Let's build the future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => setIsDemoDialogOpen(true)}>
                    Schedule a Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsAuditDialogOpen(true)}
                  >
                    Request AI Audit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-secondary/20 cursor-pointer" id="blog">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Latest Insights from Our{" "}
                <span className="text-gradient">AI Blog</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with trends, innovations, and expert discussions
                shaping the AI landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  onClick={() =>
                    navigate("/blog-detail", {
                      state: { blogs, currentId: blog.id },
                    })
                  }
                >
                  <img
                    src={blog.image}
                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-6 space-y-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${blog.categoryColor}`}
                    >
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold">{blog.title}</h3>
                    <p className="text-muted-foreground">{blog.description.slice(0 , 100)+"..."}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Case Studies Section */}
        <section className="py-28 bg-white" id="case-studies">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Real Impact, Real{" "}
                <span className="text-gradient">AI Success</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore how our AI solutions helped companies transform their
                workflows, reduce costs, and unlock new business opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <div className="bg-secondary/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3">
                  Hotel Chain — AI Revenue Management
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implemented an AI-powered revenue management model resulting
                  in:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 32% increase in monthly revenue</li>
                  <li>• Reduced manual analysis time by 78%</li>
                  <li>• Fully automated forecasting engine</li>
                </ul>
                <p className="mt-4 text-primary font-medium">
                  Outcome: AI-driven pricing boosted profitability across 18+
                  properties.
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="bg-secondary/20 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3">
                  Fintech — Fraud Detection Engine
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deployed a real-time fraud analytics system leveraging anomaly
                  detection:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 91% faster fraud spotting</li>
                  <li>• 40% reduction in false-positive alerts</li>
                  <li>• ML model trained on 20M+ transactions</li>
                </ul>
                <p className="mt-4 text-primary font-medium">
                  Outcome: Reduced fraud losses and improved compliance.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => navigate("/products")}
                className="px-6 py-3 text-lg border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Know More
              </button>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-28 bg-gradient-to-b from-secondary/30 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Businesses Choose{" "}
                <span className="text-gradient">Our AI Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We combine cutting-edge research with enterprise-grade
                engineering to deliver AI solutions you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Cpu className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Full-Stack AI Development
                </h3>
                <p className="text-muted-foreground">
                  From model building to deployment—complete AI engineering
                  under one roof.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  We follow industry-leading security, compliance, and ethical
                  AI practices.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Scalable for Millions
                </h3>
                <p className="text-muted-foreground">
                  AI pipelines optimized for massive datasets and high
                  throughput.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Human-Centric Design</h3>
                <p className="text-muted-foreground">
                  Our AI solutions enhance human decision-making—not replace it.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Precision & Accuracy</h3>
                <p className="text-muted-foreground">
                  Models optimized for high reliability across all use cases.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Faster Deployment</h3>
                <p className="text-muted-foreground">
                  Our AI deployment frameworks ensure rapid go-to-market
                  execution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <AuditRequestDialog
        open={isAuditDialogOpen}
        onOpenChange={setIsAuditDialogOpen}
      />
      <DemoRequestDialog
        open={isDemoDialogOpen}
        onOpenChange={setIsDemoDialogOpen}
      />
    </div>
  );
};

export default Services;
