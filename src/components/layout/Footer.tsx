import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/261cb841-1550-43b8-927d-f30d8e8fb3c7.png"
                alt="Webisdom AI Solutions"
                className="h-20 sm:h-20 w-56 brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Building domain-specific AI solutions that deliver measurable
              impact across Hospitality, Fintech, and Healthcare.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/webisdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webisdom LinkedIn"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Webisdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webisdom Twitter"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Webisdom"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Products & Services */}
          <div>
            <h3 className="font-semibold mb-4">Featured Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                {/* Fixed: Changed from <a> to <Link> to stay internal */}
                <Link
                  to="/products/ai-chieftain"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI Chieftain
                </Link>
              </li>
              <li>
                <Link
                  to="/products/ai-pms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI PMS
                </Link>
              </li>
              <li>
                <Link
                  to="/products/restaurant-agent"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Restaurant AI Agent
                </Link>
              </li>
              <li>
                <Link
                  to="/services?section=ai-audit"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI Audit Service
                </Link>
              </li>
              <li>
                <Link
                  to="/products/loan-agent"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Loan Processing AI
                </Link>
              </li>
              <li>
                {/* Added Voice-Xperience here as well since we created the data for it */}
                <Link
                  to="/products/voice-xperience"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Voice-Xperience
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries & Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  to="/industries?section=hospitality"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hospitality
                </Link>
              </li>
              <li>
                <Link
                  to="/industries?section=fintech"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Fintech & Banking
                </Link>
              </li>
              <li>
                <Link
                  to="/industries?section=healthcare"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/industries?section=revenue"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Revenue Management
                </Link>
              </li>
              <li>
                <Link
                  to="/industries?section=coworking"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Coworking Spaces
                </Link>
              </li>
              <li>
                <Link
                  to="/industries?section=manufacturing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Manufacturing 4.0
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold mb-4 mt-6">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary-foreground/80 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:contact@webisdom.ai"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    contact@webisdom.ai
                  </a>
                  <a
                    href="mailto:atharv.kumar@webisdom.ai"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    atharv.kumar@webisdom.ai
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone
                  size={16}
                  className="mt-0.5 text-primary-foreground/80 flex-shrink-0"
                />
                <a 
                  href="tel:+919569394675"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 9569394675
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin
                  size={20}
                  className="mt-0.5 text-primary-foreground/80 flex-shrink-0"
                />
                <span className="text-primary-foreground/80">
                  First Floor, 8/78, Dentedge, Janpath, Connaught Place, New
                  Delhi, Delhi, 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Webisdom AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;